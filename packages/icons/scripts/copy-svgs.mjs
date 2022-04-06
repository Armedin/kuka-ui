import cpy from 'cpy';
import path from 'path';

const TARGET_DIR = path.resolve('./svg');

cpy(
  '../../node_modules/@fortawesome/fontawesome-pro/svgs/solid/**',
  TARGET_DIR,
  {
    rename: basename => `${basename}-solid`,
  }
);

cpy(
  '../../node_modules/@fortawesome/fontawesome-pro/svgs/light/**',
  TARGET_DIR
);

cpy(
  '../../node_modules/@fortawesome/fontawesome-pro/svgs/brands/**',
  TARGET_DIR
);
