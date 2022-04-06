import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" {...props}>
    <path d="M384 416c0 35.34-28.66 64-64 64s-64-28.66-64-64 28.66-63.1 64-63.1 64 27.8 64 63.1z" />
  </svg>
);

const SvgWifiWeakSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgWifiWeakSolid;
