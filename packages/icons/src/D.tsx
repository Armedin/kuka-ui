import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" {...props}>
    <path d="M160 480H16c-8.844 0-16-7.2-16-16V48c0-8.84 7.156-16 16-16l144 .01c123.5 0 224 100.5 224 223.1S283.5 480 160 480zM32 448h128c105.9 0 192-86.13 192-192S265.87 64 160 64H32v384z" />
  </svg>
);

const SvgD = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgD;
