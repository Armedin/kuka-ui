import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M195.3 105.2c-5.5 10-4.462 22.79 4.163 31.41 5.237 5.19 11.937 7.79 18.837 7.79 4.5 0 8.625-1.5 12.5-3.625C234.1 151.8 243.9 160 256 160c12.12 0 21.88-8.25 25.25-19.25 4 2.125 8.125 3.625 12.5 3.625 6.75 0 13.54-2.662 18.91-7.788 8.625-8.625 9.587-21.34 4.087-31.34C327.8 101.9 336 92.12 336 80s-8.25-21.88-19.25-25.25c5.5-10 4.487-22.76-4.138-31.39-8.625-8.625-21.36-9.612-31.36-4.113C277.9 8.25 268.1 0 256 0s-21.9 8.25-25.2 19.25c-10-5.5-22.76-4.494-31.38 4.131-8.625 8.625-9.619 21.37-4.119 31.37C184.3 58.12 176 67.88 176 80s8.3 21.9 19.3 25.2zM128 270.1l64 32 64-32 64 32 64-32 64 32 7.25-3.625C435.5 248.2 400 193.6 336.2 158c-.5.375-.688.75-1.062 1.25-10.62 10.5-24.56 16.63-39.56 17.13C285.1 186.2 271.1 192.1 256 192.1c-15.25 0-29.25-5.875-39.62-15.75-14.88-.45-28.88-6.45-39.58-17.15-.375-.5-.5-.875-1-1.25C111.9 193.6 76.38 248.4 56.75 298.5l7.25 3.6 64-32zM496 448H16c-8.75 0-16 7.2-16 16v32c0 8.8 7.25 16 16 16h480c8.75 0 16-7.25 16-16v-32c0-8.8-7.2-16-16-16zm-30.2-118.9-17.8 8.8-64-32-64 32-64-32-64 32-64-32-64 32-17.75-8.75C32.25 377.8 32 416 32 416h448s-.2-38.2-14.2-86.9z" />
  </svg>
);

const SvgHatWinterSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgHatWinterSolid;
