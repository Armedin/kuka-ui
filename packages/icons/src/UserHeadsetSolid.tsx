import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
    <path d="M48 224c8.88 0 16-7.1 16-16v-16c0-88.25 71.75-160 160-160s160 71.75 160 160v16c0 44.1-35.9 80-80 80h-32c0-17.62-14.38-32-32-32h-32c-17.62 0-32 14.38-32 32s14.38 32 32 32h96c61.88-.125 111.9-50.13 112-112v-16C416 86.1 329.87 0 224 0S32 86.13 32 192v16c0 8.9 7.13 16 16 16zm160 0h32c22.88 0 43.98 12.2 55.36 31.95l8.64.05c26.5 0 48-21.5 48-47.1V192c0-70.75-57.25-128-128-128S96 121.25 96 192c0 40.38 19.12 75.99 48.37 99.49-.17-1.29-.37-2.19-.37-3.49 0-35.4 28.6-64 64-64zm106.7 128H133.3C59.7 352 0 411.7 0 485.3 0 500.1 11.94 512 26.66 512H421.3c14.8 0 26.7-11.9 26.7-26.7 0-73.6-59.7-133.3-133.3-133.3z" />
  </svg>
);

const SvgUserHeadsetSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgUserHeadsetSolid;
