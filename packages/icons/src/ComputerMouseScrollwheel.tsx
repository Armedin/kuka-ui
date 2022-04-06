import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" {...props}>
    <path d="M224 0h-64C71.62 0 0 71.63 0 160v192c0 88.38 71.63 160 160 160h64c88.38 0 160-71.63 160-160V160C384 71.62 312.4 0 224 0zm128 352c-.125 70.63-57.38 127.9-128 128h-64c-70.63-.125-127.9-57.38-128-128V160c.125-70.63 57.38-127.9 128-128h64c70.63.125 127.9 57.38 128 128v192zM192 95.1c-8.844 0-16 7.156-16 16v64c0 9.7 7.2 16.9 16 16.9s16-7.156 16-16v-64c0-8.8-7.2-16.9-16-16.9z" />
  </svg>
);

const SvgComputerMouseScrollwheel = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgComputerMouseScrollwheel;
