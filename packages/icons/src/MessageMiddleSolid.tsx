import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M512 63.99v287.1c0 35.25-28.75 63.1-64 63.1H336.9l-67.22 89.63c-6.4 8.533-19.2 8.533-25.6 0l-67.22-89.63H64c-35.25 0-64-28.75-64-63.1V63.99C0 28.75 28.75 0 64 0h384c35.3 0 64 28.75 64 63.99z" />
  </svg>
);

const SvgMessageMiddleSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgMessageMiddleSolid;
