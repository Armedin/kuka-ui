/**
 * Credits for the script go to MUI
 * https://github.com/mui/material-ui/blob/512896973499adbbda057e7f3685d1b23cc02de9/scripts/copy-files.js
 */

const path = require('path');
const fse = require('fs-extra');
const glob = require('fast-glob');

const packagePath = process.cwd();
const buildPath = path.join(packagePath, './build');
const srcPath = path.join(packagePath, './src');

async function includeFileInBuild(file) {
  const sourcePath = path.resolve(packagePath, file);
  const targetPath = path.resolve(buildPath, path.basename(file));
  await fse.copy(sourcePath, targetPath);
  console.log(`Copied ${sourcePath} to ${targetPath}`);
}

async function typescriptCopy({ from, to }) {
  if (!(await fse.pathExists(to))) {
    console.warn(`path ${to} does not exists`);
    return [];
  }

  const files = await glob('**/*.d.ts', { cwd: from });
  const cmds = files.map(file =>
    fse.copy(path.resolve(from, file), path.resolve(to, file))
  );
  return Promise.all(cmds);
}

async function createPackageFile() {
  const packageData = await fse.readFile(
    path.resolve(packagePath, './package.json'),
    'utf8'
  );
  const { nyc, scripts, devDependencies, workspaces, ...packageDataOther } =
    JSON.parse(packageData);

  const newPackageData = {
    ...packageDataOther,
    private: false,
    ...(packageDataOther.main
      ? {
          main: fse.existsSync(path.resolve(buildPath, './node/index.js'))
            ? './node/index.js'
            : './index.js',
          module: fse.existsSync(path.resolve(buildPath, './esm/index.js'))
            ? './esm/index.js'
            : './index.js',
        }
      : {}),
    types: './index.d.ts',
  };

  const targetPath = path.resolve(buildPath, './package.json');

  await fse.writeFile(
    targetPath,
    JSON.stringify(newPackageData, null, 2),
    'utf8'
  );
  console.log(`Created package.json in ${targetPath}`);

  return newPackageData;
}

async function prepend(file, string) {
  const data = await fse.readFile(file, 'utf8');
  await fse.writeFile(file, string + data, 'utf8');
}

async function copySrcToDest() {
  if (!fse.existsSync(srcPath)) return;

  fse.copy(srcPath, buildPath, function (err) {
    if (err) {
      console.error(err);
    } else {
      console.log(`${srcPath} copied into ${buildPath}`);
    }
  });
}

async function run() {
  try {
    const packageData = await createPackageFile();

    await Promise.all(
      [
        // use enhanced readme from workspace root for `@kukui/ui`
        packageData.name === '@kukui/ui' ? '../../README.md' : './README.md',
      ].map(file => includeFileInBuild(file))
    );

    // TypeScript
    await typescriptCopy({ from: srcPath, to: buildPath });
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
}

run();
