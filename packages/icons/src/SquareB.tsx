import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
    <path d="M384 32H64C28.65 32 0 60.65 0 96v320c0 35.35 28.65 64 64 64h320c35.35 0 64-28.65 64-64V96c0-35.35-28.7-64-64-64zm32 384c0 17.64-14.36 32-32 32H64c-17.64 0-32-14.36-32-32V96c0-17.64 14.36-32 32-32h320c17.64 0 32 14.36 32 32v320zM299.8 249.9c12.4-13 20.2-30.5 20.2-49.9 0-39.8-32.2-72-72-72h-88c-17.7 0-32 14.3-32 32v192c0 17.67 14.33 32 32 32h104c39.77 0 72-32.24 72-72 0-26.7-14.7-49.7-36.2-62.1zM160 160h88c22.1 0 40 17.9 40 40s-17.9 40-40 40h-88v-80zm104 192H160v-80h104c22.06 0 40 17.94 40 40s-17.9 40-40 40z" />
  </svg>
);

const SvgSquareB = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgSquareB;
