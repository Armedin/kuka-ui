import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" {...props}>
    <path d="M64 96c0-53.02 42.1-96 96-96 53 0 96 42.98 96 96v256c0 35.3-28.7 64-64 64s-64-28.7-64-64V144c0-8.8 7.2-16 16-16s16 7.2 16 16v208c0 17.7 14.3 32 32 32s32-14.3 32-32V96c0-35.35-28.7-64-64-64S96 60.65 96 96v288c0 53 42.1 96 96 96 53 0 96-43 96-96V144c0-8.8 7.2-16 16-16s16 7.2 16 16v240c0 70.7-57.3 128-128 128S64 454.7 64 384V96z" />
  </svg>
);

const SvgPaperclipVertical = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgPaperclipVertical;
