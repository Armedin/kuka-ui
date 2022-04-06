import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M323.1 75.05c-2.188-2.188-6.5-2.656-9.75-2.656-27.47.125-87.44 32.58-148.5 94.34-80.31 81.3-101.6 148-89.97 159.6 2.188 2.188 6.469 2.656 9.75 2.656 27.47-.125 87.41-32.58 148.5-94.34C313.4 153.3 334.7 86.56 323.1 75.05zm113.8-8.21-40.03-39.76C339.2-30.23 209.7 6.4 107.7 108.9S-30.2 341 27.53 398.3l40.03 39.76c99.72 99.04 260.9 98.56 360-1.076l10.34-10.39c99.2-99.694 98.7-260.694-1-359.754zM84.94 360.1c-16.78 0-27.12-6.484-32.63-11.94C15.03 311.1 69.27 217.1 142.1 144.2 204.29 81.31 271.4 40.5 313 40.4c16.78 0 27.12 6.484 32.63 11.94C382.1 89.39 328.7 183.4 255.8 257.1c-62.1 62.9-129.2 103.7-170.86 103zm174.36 91.2c-3.1 3.1-7.2 4.7-11.3 4.7s-8.188-1.562-11.31-4.688l-32-32c-6.25-6.25-6.25-16.38 0-22.62s16.38-6.25 22.62 0l32 32c6.29 6.208 6.29 16.408-.01 22.608zm136-56c-3.1 3.1-7.2 4.7-11.3 4.7s-8.188-1.562-11.31-4.688l-32-32c-6.25-6.25-6.25-16.38 0-22.62s16.38-6.25 22.62 0l32 32c6.29 6.208 6.29 16.408-.01 22.608zM440 264a15.933 15.933 0 0 1-11.31-4.688l-32-32c-6.25-6.25-6.25-16.38 0-22.62s16.38-6.25 22.62 0l32 32c6.25 6.25 6.25 16.38 0 22.62A16.063 16.063 0 0 1 440 264z" />
  </svg>
);

const SvgCoconutSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgCoconutSolid;
