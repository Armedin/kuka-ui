import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" {...props}>
    <path d="m70.63 422.6-45.25-45.26c-12.5-12.5-12.5-32.76 0-45.25l129.6-129.6L87.1 134.6a32.005 32.005 0 0 1-6.938-34.87C85.12 87.79 96.78 80 109.7 80H336a31.91 31.91 0 0 1 22.63 9.369c5.789 5.791 9.371 13.79 9.371 22.63L368 338.3c0 12.95-7.789 24.61-19.75 29.57a32.012 32.012 0 0 1-34.87-6.939l-67.88-67.88-129.6 129.6C103.4 435.1 83.13 435.1 70.63 422.6z" />
  </svg>
);

const SvgUpRightSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgUpRightSolid;
