const path = require('path');
const { promisify } = require('util');
const childProcess = require('child_process');

const exec = promisify(childProcess.exec);

const packagePath = process.cwd();
const buildPath = path.join(packagePath, './build');
const srcPath = path.join(packagePath, './src');
const tsConfigFile = path.resolve(packagePath, 'tsconfig.json');

async function run() {
  const inputFile = path.resolve(srcPath, './index.ts');

  let command = `$(yarn bin esbuild) ${inputFile} --format=esm --outfile=${path.resolve(
    buildPath,
    './index.esm.js'
  )} --bundle --platform=browser --target=es2019`;
  await exec(command);

  command = `$(yarn bin tsc) -p ${tsConfigFile} --emitDeclarationOnly --declaration --incremental false --outDir ${buildPath} &`;
  await exec(command);
}

run();
