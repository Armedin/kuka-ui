import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" {...props}>
    <path d="M64 384c-35.35 0-64-28.7-64-64V192c0-35.3 28.65-64 64-64h512c35.3 0 64 28.7 64 64v128c0 35.3-28.7 64-64 64H64zm0-32h512c17.7 0 32-14.3 32-32V192c0-17.7-14.3-32-32-32h-48v64c0 8.8-7.2 16-16 16s-16-7.2-16-16v-64h-64v64c0 8.8-7.2 16-16 16s-16-7.2-16-16v-64h-64v64c0 8.8-7.2 16-16 16s-16-7.2-16-16v-64h-64v64c0 8.8-7.2 16-16 16s-16-7.2-16-16v-64h-64v64c0 8.8-7.2 16-16 16s-16-7.2-16-16v-64H64c-17.67 0-32 14.3-32 32v128c0 17.7 14.33 32 32 32z" />
  </svg>
);

const SvgRulerHorizontal = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgRulerHorizontal;
