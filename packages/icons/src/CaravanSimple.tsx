import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" {...props}>
    <path d="M256 128c17.7 0 32 14.3 32 32v64c0 17.7-14.3 32-32 32H128c-17.7 0-32-14.3-32-32v-64c0-17.7 14.3-32 32-32h128zm0 32H128v64h128v-64zm64 0c0-17.7 14.3-32 32-32h64c17.7 0 32 14.3 32 32v64c0 17.7-14.3 32-32 32h-64c-17.7 0-32-14.3-32-32v-64zm32 64h64v-64h-64v64zM96 416H80c-44.18 0-80-35.8-80-80V112c0-44.18 35.82-80 80-80h336c88.4 0 160 71.6 160 160v192h48c8.8 0 16 7.2 16 16s-7.2 16-16 16H288c0 53-43 96-96 96-53.9 0-96-43-96-96zM32 112v224c0 26.5 21.49 48 48 48h21.5c13.1-37.3 48.7-64 90.5-64s77.4 26.7 90.5 64H544V192c0-70.7-57.3-128-128-128H80c-26.51 0-48 21.49-48 48zm160 240c-35.3 0-64 28.7-64 64s28.7 64 64 64 64-28.7 64-64-28.7-64-64-64z" />
  </svg>
);

const SvgCaravanSimple = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgCaravanSimple;
