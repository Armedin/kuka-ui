import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" {...props}>
    <path d="M86.63 214.6 160 141.3V320c0 17.69 14.31 32 32 32s32-14.31 32-32V141.3l73.38 73.38C303.6 220.9 311.8 224 320 224s16.38-3.125 22.62-9.375c12.5-12.5 12.5-32.75 0-45.25l-128-128c-12.5-12.5-32.75-12.5-45.25 0l-128 128c-12.5 12.5-12.5 32.75 0 45.25s32.76 12.475 45.26-.025zM352 416H32c-17.69 0-32 14.31-32 32s14.31 32 32 32h320c17.69 0 32-14.31 32-32s-14.3-32-32-32z" />
  </svg>
);

const SvgArrowUpFromLineSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgArrowUpFromLineSolid;
