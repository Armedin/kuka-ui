import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" {...props}>
    <path d="M241.9 234.1c27.8-20.4 46.1-53 46.1-90.1 0-61.75-50.2-112-112-112H16C7.156 32 0 39.16 0 48v416c0 8.8 7.156 16 16 16l176 .01c70.58 0 128-57.42 128-128 0-52.91-32.3-98.41-78.1-117.91zM32 64h144c44.1 0 80 35.89 80 80s-35.9 80-80 80H32V64zm160 384H32V256h160c52.94 0 96 43.06 96 96s-43.1 96-96 96z" />
  </svg>
);

const SvgB = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgB;
