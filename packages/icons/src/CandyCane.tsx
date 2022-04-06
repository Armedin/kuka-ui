import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M497.5 91.1C469.6 33.12 411.8 0 352.4 0c-27.88 0-56.14 7.25-81.77 22.62L243.1 38.1c-15.2 10.02-20.1 29.65-11 44.77l32.76 54.87c9.375 15.75 29.38 19.94 43.88 11.06l27.51-16.37c36-21.5 69.6 33.02 32.85 54.9L15.6 397.6c-15.25 9.125-20.13 28.62-11 43.87l32.76 54.87A31.977 31.977 0 0 0 64.85 512c5.625 0 11.27-1.507 16.39-4.507l347.4-206.5C500.2 258.1 533.2 167.5 497.5 91.1zm-205.3 30.3-32.75-54.88C291.7 47.25 312.6 32.12 351.1 32v64c-22.8.25-36.4 12.1-58.9 25.4zm91-17.4h.75V36.12c36.75 9.125 67.75 34 84.63 69.5 3.375 7.125 6 14.62 7.875 22.25h-68.5c-.25-.25-.25-.564-.375-.814C401.7 117.2 393.2 109.4 383.2 104zM256.7 291.4l82.38-48.1 64.25 36.25-82.25 49-64.38-37.15zm32.6 55.1-87.5 52-64.25-36.25 87.5-52 64.25 36.25zM64.72 480l-32.88-54.88 73.88-43.88 64.38 36.13L64.72 480zM432.7 258.5l-62-34.88 14.63-8.75C405.4 203 416.2 181.8 416.2 160h63c-.8 36.5-17.1 72.8-46.5 98.5z" />
  </svg>
);

const SvgCandyCane = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgCandyCane;
