import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" {...props}>
    <path d="M192 480C86.1 480 0 393.88 0 288.9V64.01c0-17.69 14.31-32 32-32s32 14.31 32 32v223.1c0 70.59 57.41 128 128 128s128-57.41 128-128V64.01c0-17.69 14.31-32 32-32s32 14.31 32 32v223.1C384 393.9 297.9 480 192 480z" />
  </svg>
);

const SvgUnionSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgUnionSolid;
