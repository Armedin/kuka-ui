import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M112 288h288c8.8 0 16-7.2 16-16s-7.2-16-16-16H112c-8.8 0-16 7.2-16 16s7.2 16 16 16zM224 32h64c8.844 0 16-7.156 16-16s-7.2-16-16-16h-64c-8.8 0-16 7.156-16 16s7.2 16 16 16zM80 32H64V16c0-8.844-7.16-16-16-16S32 7.156 32 16v16H16C7.156 32 0 39.16 0 48s7.156 16 16 16h16v16c0 8.84 7.16 16 16 16s16-7.16 16-16V64h16c8.84 0 16-7.16 16-16s-7.16-16-16-16zm416 352h-16v-16c0-8.844-7.156-16-16-16s-16 7.2-16 16v16h-16c-8.844 0-16 7.156-16 16s7.156 16 16 16h16v16c0 8.844 7.156 16 16 16s16-7.156 16-16v-16h16c8.844 0 16-7.156 16-16s-7.2-16-16-16zm-128 64H144c-26.5 0-48 21.5-48 48 0 8.8 7.2 16 16 16s16-7.2 16-16 7.2-16 16-16h224c8.828 0 16 7.172 16 16 0 8.844 7.156 16 16 16s16-7.156 16-16c0-26.5-21.5-48-48-48z" />
  </svg>
);

const SvgTransporter6 = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgTransporter6;
