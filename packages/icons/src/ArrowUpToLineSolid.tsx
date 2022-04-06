import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" {...props}>
    <path d="M86.63 342.6 160 269.3V448c0 17.69 14.31 32 32 32s32-14.31 32-32V269.3l73.38 73.38C303.6 348.9 311.8 352 320 352s16.38-3.125 22.62-9.375c12.5-12.5 12.5-32.75 0-45.25l-128-128c-12.5-12.5-32.75-12.5-45.25 0l-128 128c-12.5 12.5-12.5 32.75 0 45.25s32.76 12.475 45.26-.025zM32 96h320c17.69 0 32-14.31 32-32s-14.31-32-32-32H32C14.31 32 0 46.31 0 64s14.31 32 32 32z" />
  </svg>
);

const SvgArrowUpToLineSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgArrowUpToLineSolid;
