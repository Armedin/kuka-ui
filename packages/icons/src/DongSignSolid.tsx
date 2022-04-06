import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" {...props}>
    <path d="M320 64c17.7 0 32 14.33 32 32 0 17.7-14.3 32-32 32v256c0 17.7-14.3 32-32 32-13 0-24.1-7.7-29.2-18.8-19.4 11.9-42.3 18.8-66.8 18.8-70.7 0-128-57.3-128-128s57.3-128 128-128c23.3 0 45.2 6.2 64 17.1V128h-32c-17.7 0-32-14.3-32-32 0-17.67 14.3-32 32-32h32c0-17.67 14.3-32 32-32s32 14.33 32 32zm-64 224c0-35.3-28.7-64-64-64s-64 28.7-64 64 28.7 64 64 64 64-28.7 64-64zm96 160c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.67 0-32-14.3-32-32s14.33-32 32-32h320z" />
  </svg>
);

const SvgDongSignSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgDongSignSolid;
