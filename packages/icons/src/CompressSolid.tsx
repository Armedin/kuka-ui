import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
    <path d="M128 320H32c-17.69 0-32 14.31-32 32s14.31 32 32 32h64v64c0 17.69 14.31 32 32 32s32-14.31 32-32v-96c0-17.7-14.3-32-32-32zm288 0h-96c-17.69 0-32 14.31-32 32v96c0 17.69 14.31 32 32 32s32-14.31 32-32v-64h64c17.69 0 32-14.31 32-32s-14.3-32-32-32zm-96-128h96c17.69 0 32-14.31 32-32s-14.31-32-32-32h-64V64c0-17.69-14.31-32-32-32s-32 14.31-32 32v96c0 17.7 14.3 32 32 32zM128 32c-17.7 0-32 14.31-32 32v64H32c-17.69 0-32 14.3-32 32s14.31 32 32 32h96c17.69 0 32-14.31 32-32V64c0-17.69-14.3-32-32-32z" />
  </svg>
);

const SvgCompressSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgCompressSolid;
