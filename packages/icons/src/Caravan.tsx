import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" {...props}>
    <path d="M96 160c0-17.7 14.3-32 32-32h128c17.7 0 32 14.3 32 32v64c0 17.7-14.3 32-32 32H128c-17.7 0-32-14.3-32-32v-64zm32 64h128v-64H128v64zM0 336V112c0-44.18 35.82-80 80-80h336c88.4 0 160 71.6 160 160v192h48c8.8 0 16 7.2 16 16s-7.2 16-16 16H288c0 53-43 96-96 96-53.9 0-96-43-96-96H80c-44.18 0-80-35.8-80-80zM416 64H80c-26.51 0-48 21.49-48 48v224c0 26.5 21.49 48 48 48h21.5c13.1-37.3 48.7-64 90.5-64s77.4 26.7 90.5 64H320V168c0-22.1 17.9-40 40-40h80c22.1 0 40 17.9 40 40v216h64V192c0-70.7-57.3-128-128-128zm32 160v-56c0-4.4-3.6-8-8-8h-80c-4.4 0-8 3.6-8 8v216h96V256h-32c-8.8 0-16-7.2-16-16s7.2-16 16-16h32zM192 480c35.3 0 64-28.7 64-64s-28.7-64-64-64-64 28.7-64 64 28.7 64 64 64z" />
  </svg>
);

const SvgCaravan = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgCaravan;
