import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" {...props}>
    <path d="M160 288c-17.7 0-32 14.3-32 31.1v160c0 18.6 14.3 32.9 32 32.9s32-14.33 32-31.1V319.1c0-16.8-14.3-31.1-32-31.1zM32 384c-17.67 0-32 14.3-32 31.1v64C0 497.7 14.33 512 31.1 512S64 497.7 64 480v-64.9c0-16.8-14.33-31.1-32-31.1z" />
  </svg>
);

const SvgSignalFairSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgSignalFairSolid;
