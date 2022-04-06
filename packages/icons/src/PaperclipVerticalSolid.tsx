import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" {...props}>
    <path d="M32 128C32 57.31 89.31 0 160 0c70.7 0 128 57.31 128 128v192c0 44.2-35.8 80-80 80s-80-35.8-80-80V160c0-17.7 14.3-32 32-32s32 14.3 32 32v160c0 8.8 7.2 16 16 16s16-7.2 16-16V128c0-35.35-28.7-64-64-64s-64 28.65-64 64v208c0 61.9 50.1 112 112 112s112-50.1 112-112V160c0-17.7 14.3-32 32-32s32 14.3 32 32v176c0 97.2-78.8 176-176 176S32 433.2 32 336V128z" />
  </svg>
);

const SvgPaperclipVerticalSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgPaperclipVerticalSolid;
