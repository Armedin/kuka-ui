import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M502.6 99.88 412.09 9.37c-12.5-12.5-32.75-12.51-45.26 0l-45.25 45.25c-29.46 29.46-35.37 73.31-18.46 108.1L197.4 269.4l-45.3-45.3c-12.5-12.5-32.75-12.5-45.25 0l-67.88 67c-50.01 50-45.26 181-22.63 203.7 22.63 22.63 153.6 27.38 203.6-22.63l67.88-67.89c12.5-12.5 12.5-32.75 0-45.25L242.6 314.6l105.8-105.8c35.65 16.91 79.51 11 108.1-18.46l45.26-45.25c13.34-12.49 13.34-32.69.84-45.21zm-90.5 45.22c-12.48 12.48-32.78 12.47-45.26 0-12.47-12.47-12.48-32.77 0-45.26l22.63-22.63 45.25 45.26-22.62 22.63z" />
  </svg>
);

const SvgShovelSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgShovelSolid;
