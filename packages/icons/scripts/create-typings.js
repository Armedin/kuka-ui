import path from 'path';
import chalk from 'chalk';
import glob from 'fast-glob';
import fs from 'fs-extra';

const SRC_DIR = path.resolve('./lib');
const TARGET_DIR = path.resolve();

function normalizeFileName(file) {
  return path.parse(file).name;
}

function createIndexTyping(files) {
  const contents = `
import { SvgIcon } from '@kuka';

type SvgIconComponent = typeof SvgIcon;

${files
  .map(file => `export const ${normalizeFileName(file)}: SvgIconComponent;`)
  .join('\n')}
`;

  return fs.writeFile(path.resolve(TARGET_DIR, 'index.d.ts'), contents, 'utf8');
}

async function createTypings() {
  console.log(
    `\u{1f52c} Searching for modules inside "${chalk.dim(SRC_DIR)}".`
  );
  const files = await glob('!(index)*.tsx', { cwd: SRC_DIR });
  await createIndexTyping(files);
  console.log(`\u{1F5C4}  Written typings to ${chalk.dim(TARGET_DIR)}.`);
}

createTypings();
