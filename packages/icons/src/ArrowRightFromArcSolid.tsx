import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M256 448c17.7 0 32 14.3 32 32s-14.3 32-32 32C114.6 512 0 397.4 0 256S114.6 0 256 0c17.7 0 32 14.33 32 32s-14.3 32-32 32C149.1 64 64 149.1 64 256c0 106 85.1 192 192 192zm246.6-214.6c12.5 12.5 12.5 32.7 0 45.2l-112 112c-12.5 12.5-32.7 12.5-45.2 0s-12.5-32.7 0-45.2l57.3-57.4H192c-17.7 0-32-14.3-32-32s14.3-32 32-32h210.7l-57.3-57.4c-12.5-12.5-12.5-32.7 0-45.2s32.7-12.5 45.2 0l112 112z" />
  </svg>
);

const SvgArrowRightFromArcSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgArrowRightFromArcSolid;
