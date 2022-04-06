import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" {...props}>
    <path d="M576 64H64C28.8 64 0 92.8 0 128v256c0 35.2 28.8 64 64 64h128.3c25.18 0 48.03-14.77 58.37-37.73l27.76-61.65c7.875-17.5 24-28.63 41.63-28.63s33.75 11.13 41.63 28.63l27.75 61.63a64.042 64.042 0 0 0 58.4 37.75H576c35.2 0 64-28.8 64-64V128c0-35.2-28.8-64-64-64zM160 304c-35.38 0-64-28.63-64-64s28.62-63.1 64-63.1 64 28.62 64 63.1-28.6 64-64 64zm320 0c-35.38 0-64-28.63-64-64s28.62-63.1 64-63.1 64 28.62 64 63.1-28.6 64-64 64z" />
  </svg>
);

const SvgVrCardboardSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgVrCardboardSolid;
