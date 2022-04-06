import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M448 256c0-106.9-86-192-192-192-17.7 0-32-14.33-32-32s14.3-32 32-32c141.4 0 256 114.6 256 256S397.4 512 256 512c-17.7 0-32-14.3-32-32s14.3-32 32-32c106 0 192-86 192-192zm-105.4-22.6c12.5 12.5 12.5 32.7 0 45.2l-112 112c-12.5 12.5-32.7 12.5-45.2 0s-12.5-32.7 0-45.2l57.3-57.4H32c-17.67 0-32-14.3-32-32s14.33-32 32-32h210.7l-57.3-57.4c-12.5-12.5-12.5-32.7 0-45.2s32.7-12.5 45.2 0l112 112z" />
  </svg>
);

const SvgArrowRightToArcSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgArrowRightToArcSolid;
