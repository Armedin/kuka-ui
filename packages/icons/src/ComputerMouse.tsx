import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" {...props}>
    <path d="M224 0h-64C71.63 0 0 71.62 0 160v192c0 88.38 71.63 160 160 160h64c88.38 0 160-71.63 160-160V160C384 71.62 312.4 0 224 0zM32 160c.125-70.62 57.38-127.9 128-128h16v160H32v-32zm320 192c-.125 70.63-57.38 127.9-128 128h-64c-70.63-.125-127.9-57.38-128-128V224h320v128zm0-160H208V32h16c70.63.125 127.9 57.38 128 128v32z" />
  </svg>
);

const SvgComputerMouse = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgComputerMouse;
