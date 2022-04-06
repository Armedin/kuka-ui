import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M128 64H32C14.31 64 0 78.31 0 96v96c0 17.69 14.31 32 32 32s32-14.31 32-32v-64h64c17.69 0 32-14.31 32-32s-14.3-32-32-32zm352 0h-96c-17.69 0-32 14.31-32 32s14.31 32 32 32h64v64c0 17.69 14.31 32 32 32s32-14.31 32-32V96c0-17.69-14.3-32-32-32zM128 384H64v-64c0-17.69-14.31-32-32-32S0 302.31 0 320v96c0 17.69 14.31 32 32 32h96c17.69 0 32-14.31 32-32s-14.3-32-32-32zm352-96c-17.69 0-32 14.31-32 32v64h-64c-17.69 0-32 14.31-32 32s14.31 32 32 32h96c17.69 0 32-14.31 32-32v-96c0-17.7-14.3-32-32-32z" />
  </svg>
);

const SvgExpandWideSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgExpandWideSolid;
