import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" {...props}>
    <path d="M288 32c17.7 0 32 14.33 32 32s-14.3 32-32 32H112v96h144c17.7 0 32 14.3 32 32s-14.3 32-32 32H112v64h80c17.7 0 32 14.3 32 32s-14.3 32-32 32h-80v64c0 17.7-14.33 32-32 32s-32-14.3-32-32v-64H32c-17.67 0-32-14.3-32-32s14.33-32 32-32h16V64c0-17.67 14.33-32 32-32h208z" />
  </svg>
);

const SvgFrancSignSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgFrancSignSolid;
