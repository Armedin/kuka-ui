import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M256 448c106 0 192-86 192-192 0-17.7 14.3-32 32-32s32 14.3 32 32c0 141.4-114.6 256-256 256S0 397.4 0 256c0-17.7 14.33-32 32-32s32 14.3 32 32c0 106 85.1 192 192 192zm22.6-105.4c-12.5 12.5-32.7 12.5-45.2 0l-112-112c-12.5-12.5-12.5-32.7 0-45.2s32.7-12.5 45.2 0l57.4 57.3V32c0-17.67 14.3-32 32-32s32 14.33 32 32v210.7l57.4-57.3c12.5-12.5 32.7-12.5 45.2 0s12.5 32.7 0 45.2l-112 112z" />
  </svg>
);

const SvgArrowDownToArcSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgArrowDownToArcSolid;
