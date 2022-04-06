import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" {...props}>
    <path d="M500.9 214.4C584.9 237.5 640 276.2 640 320c0 70.7-143.3 128-320 128S0 390.7 0 320c0-43.8 55.08-82.5 139.1-105.6C154.8 128.8 229.9 64 320 64c90.2 0 165.2 64.8 180.9 150.4zM320 112c-59.2 0-109.6 37.9-128.3 90.7-5 14.2-7.7 29.4-7.7 45.3 0 0 40 40 136 40s136-40 136-40c0-15.9-2.7-31.1-7.7-45.3C429.6 149.9 379.2 112 320 112zm0 288c13.3 0 24-10.7 24-24s-10.7-24-24-24-24 10.7-24 24 10.7 24 24 24zm-192-96c-13.3 0-24 10.7-24 24s10.7 24 24 24 24-10.7 24-24-10.7-24-24-24zm384 48c13.3 0 24-10.7 24-24s-10.7-24-24-24-24 10.7-24 24 10.7 24 24 24z" />
  </svg>
);

const SvgUfoSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgUfoSolid;
