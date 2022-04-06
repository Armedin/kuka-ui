import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" {...props}>
    <path d="M192 16.01c-105.9 0-192 107.7-192 240s86.13 239.1 192 239.1 192-107.6 192-239.1-86.1-240-192-240zm0 64c62.62 0 114.8 62.21 125.8 144H66.22c10.99-81.81 63.18-144 125.78-144zM192 432c-62.62 0-114.8-62.21-125.8-144h251.6c-11 81.8-63.2 144-125.8 144z" />
  </svg>
);

const SvgThetaSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgThetaSolid;
