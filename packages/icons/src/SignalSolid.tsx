import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" {...props}>
    <path d="M544 0c-17.67 0-32 14.33-32 31.1V480c0 17.7 14.3 32 32 32s32-14.33 32-31.1V31.1C576 14.33 561.7 0 544 0zM160 288c-17.7 0-32 14.3-32 31.1v160c0 18.6 14.3 32.9 32 32.9s32-14.33 32-31.1V319.1c0-16.8-14.3-31.1-32-31.1zM32 384c-17.67 0-32 14.3-32 31.1v64C0 497.7 14.33 512 31.1 512S64 497.7 64 480v-64.9c0-16.8-14.33-31.1-32-31.1zM416 96c-17.67 0-32 14.33-32 31.1V480c0 17.7 14.3 32 32 32s32-14.33 32-31.1V127.1c0-16.8-14.3-31.1-32-31.1zm-128 96c-17.7 0-32 14.3-32 31.1v256c0 18.6 14.3 32.9 32 32.9s32-14.33 32-31.1V223.1c0-16.8-14.3-31.1-32-31.1z" />
  </svg>
);

const SvgSignalSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgSignalSolid;
