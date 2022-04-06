import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" {...props}>
    <path d="m358.6 157.3-67.88-67.88C284.5 83.13 276.3 80 268.1 80s-16.38 3.125-22.63 9.375L119.1 215.7l-61.89-61.9A33.55 33.55 0 0 0 33.5 144c-4.316 0-8.668.836-12.81 2.551C8.158 151.7 0 163.9 0 177.5v236.1c0 9.254 3.75 17.63 9.812 23.7 6.068 7 14.438 10.7 23.698 10.7h236.1c13.56 0 25.77-8.156 30.96-20.69a33.52 33.52 0 0 0-7.268-36.52l-61.92-61.92 126.4-126.4C371.1 190 371.1 169.8 358.6 157.3zm-23.5 22.6L187 328l84.54 84.55c.43.43.56 1.09.328 1.648C271.7 415.6 271.1 416 270.5 416H33.51L32 414.5v-237c0-.6.36-1.1.94-1.4l1.645.332 84.54 84.54 148.1-148.1L335.1 179.9z" />
  </svg>
);

const SvgDownLeft = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgDownLeft;
