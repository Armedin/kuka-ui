const chalk = require('chalk');
const childProcess = require('child_process');
const glob = require('fast-glob');
const fse = require('fs-extra');
const path = require('path');
const { promisify } = require('util');
const yargs = require('yargs');

const exec = promisify(childProcess.exec);

/**
 * Fixes a wrong import path caused by https://github.com/microsoft/TypeScript/issues/39117
 * @remarks Paths are hardcoded since it is unclear if all these broken import paths target "public paths".
 * @param {string} importPath - POSIX path
 */
function rewriteImportPath(importPath) {
  const coreSrcPath = path.posix.join('..', 'ui', 'src');
  if (importPath.startsWith(coreSrcPath)) {
    return importPath.replace(coreSrcPath, '@kukui/ui');
  }

  const stylesSrcPath = path.posix.join('..', 'styles', 'src');
  if (importPath.startsWith(stylesSrcPath)) {
    return importPath.replace(stylesSrcPath, '@kukui/styles');
  }

  const systemSrcPath = path.posix.join('..', 'system', 'src');
  if (importPath.startsWith(systemSrcPath)) {
    return importPath.replace(systemSrcPath, '@kukui/system');
  }

  throw new Error(`Don't know where to rewrite '${importPath}' to`);
}

async function main() {
  const packageRoot = process.cwd();

  const tsconfigPath = path.join(packageRoot, 'tsconfig.build.json');
  if (!fse.existsSync(tsconfigPath)) {
    throw new Error(
      'Unable to find a tsconfig to build this project. ' +
        `The package root needs to contain a 'tsconfig.build.json'. ` +
        `The package root is '${packageRoot}'`
    );
  }

  await exec(['yarn', 'tsc', '-b', tsconfigPath].join(' '));
}

yargs
  .command({
    command: '$0',
    description:
      'Builds a project with a fix for https://github.com/microsoft/TypeScript/issues/39117',
    handler: main,
  })
  .help()
  .strict(true)
  .version(false)
  .parse();
