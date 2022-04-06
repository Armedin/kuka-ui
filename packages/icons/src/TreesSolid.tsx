import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" {...props}>
    <path d="M298.4 288H329c9 0 17-5 20.88-13 3.75-8.125 2.5-17.38-3.375-24.12L268.4 160h28.88c9.127 0 17.38-5.375 20.88-13.62 3.625-8.125 1.875-17.62-4.25-24.12L203.6 4.875c-6-6.5-17.25-6.5-23.25 0L69.97 122.3c-6 6.5-7.75 16-4.125 24.12C69.34 154.6 77.59 160 86.72 160h28.88l-78.14 90.9c-5.875 6.875-7.125 16-3.375 24.12C37.96 283 45.84 288 54.96 288h30.63L5.71 378.5c-6 6.75-7.377 16.12-3.625 24.25C5.834 410.8 14.08 416 23.09 416H160v64c0 17.7 14.3 32 32 32s32-14.3 32-32v-64h136.9c9 0 17.25-5.25 21-13.25 3.75-8.125 2.5-17.5-3.5-24.25l-80-90.5zm335.9 90.5L554.4 288h30.63c9 0 17-5 20.88-13 3.75-8.125 2.5-17.38-3.375-24.12L524.4 160h28.88c9.125 0 17.38-5.375 20.88-13.62 3.625-8.125 1.875-17.62-4.25-24.12L459.61 4.86c-6-6.5-17.25-6.5-23.25 0l-95.14 101.3c11.13 15.38 14 35.25 6.377 52.88a53.876 53.876 0 0 1-18.25 22.75l41.5 48.25c14 16.25 17.13 39.25 8.002 58.62-4.25 8.875-10.5 16.12-18.13 21.5l41.63 47.13c8.625 9.875 13.37 14.2 13.62 26.7L416 480c0 17.7 14.3 32 32 32s32-14.3 32-32v-64h136.9c9.002 0 17.25-5.25 21-13.25 3.8-8.15 2.4-17.45-3.6-24.25z" />
  </svg>
);

const SvgTreesSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgTreesSolid;
