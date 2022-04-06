import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" {...props}>
    <path d="M256 64c0 35.35-28.7 64-64 64s-64-28.65-64-64 28.7-64 64-64 64 28.65 64 64zM155.7 170.2c11.6 2.9 23.9 5.8 36.5 5.8 39.9 0 77.1-20.2 98.8-53.6l18.2-27.86c9.6-14.81 29.4-19 44.3-9.36 14.8 9.64 19 29.42 9.3 44.32l-18.1 27.8c-18.3 28.1-43.5 50-72.7 64.3V480c0 17.7-14.3 32-32 32s-32-14.3-32-32v-96h-32v96c0 17.7-14.3 32-32 32s-32-14.3-32-32V221.4c-28.37-14-53.06-35.3-71.13-63.3l-19.5-28.3c-9.8-14.8-5.83-34.62 8.88-44.43 14.7-9.8 34.57-5.83 44.37 8.88l19.5 29.25c14.38 21.5 35.08 37.4 58.78 45.8 1 .2 1.9.5 2.8.9z" />
  </svg>
);

const SvgChildReachingSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgChildReachingSolid;
