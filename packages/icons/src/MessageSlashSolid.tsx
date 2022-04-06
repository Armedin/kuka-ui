import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" {...props}>
    <path d="M63.1 351.1c0 35.25 28.75 63.1 63.1 63.1h95.1v83.99c0 9.749 11.25 15.45 19.12 9.7l124.9-93.69 39.37-.012L63.1 146.9v204.2zm567.7 118-82.76-64.87c16.77-11.47 27.95-30.46 27.95-52.27V63.1c0-35.25-28.75-63.1-63.1-63.1H127.1c-23.51 0-43.97 12.88-55.07 31.86L38.81 5.128A23.944 23.944 0 0 0 24.03.033c-7.125 0-14.2 3.137-18.92 9.168-8.187 10.44-6.365 25.53 4.073 33.7l591.1 463.1c10.5 8.202 25.57 6.333 33.7-4.073C643.1 492.4 641.2 477.3 630.8 469.1z" />
  </svg>
);

const SvgMessageSlashSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgMessageSlashSolid;
