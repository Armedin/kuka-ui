import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="m272 329.4 36.7-36.7c6.2-6.3 16.4-6.3 22.6 0 6.3 6.2 6.3 16.4 0 22.6l-64 64c-6.2 6.3-16.4 6.3-22.6 0l-64-64c-6.3-6.2-6.3-16.4 0-22.6 6.2-6.3 16.4-6.3 22.6 0l36.7 36.7V224H64c-35.35 0-64-28.7-64-64V96c0-35.35 28.65-64 64-64h384c35.3 0 64 28.65 64 64v64c0 35.3-28.7 64-64 64H272v105.4zM480 160V96c0-17.67-14.3-32-32-32H64c-17.67 0-32 14.33-32 32v64c0 17.7 14.33 32 32 32h384c17.7 0 32-14.3 32-32zM64 480c-35.35 0-64-28.7-64-64v-64c0-35.3 28.65-64 64-64h48c8.8 0 16 7.2 16 16s-7.2 16-16 16H64c-17.67 0-32 14.3-32 32v64c0 17.7 14.33 32 32 32h384c17.7 0 32-14.3 32-32v-64c0-17.7-14.3-32-32-32h-48c-8.8 0-16-7.2-16-16s7.2-16 16-16h48c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H64z" />
  </svg>
);

const SvgDiagramNext = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgDiagramNext;
