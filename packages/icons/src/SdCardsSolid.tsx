import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
    <path d="M384 0H208L96 112v240c0 35.25 28.75 64 64 64h224c35.25 0 64-28.75 64-64V64c0-35.25-28.7-64-64-64zm-80 160h-48V64h48v96zm80 0h-48V64h48v96zm-56 352H120C53.83 512 0 458.2 0 392V120c0-13.2 10.75-24 24-24s24 10.8 24 24v272c0 39.7 32.3 72 72 72h208c13.25 0 24 10.75 24 24s-10.7 24-24 24z" />
  </svg>
);

const SvgSdCardsSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgSdCardsSolid;
