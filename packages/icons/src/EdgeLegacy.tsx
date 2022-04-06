import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="m25.71 228.16.35-.48c0 .16 0 .32-.07.48Zm460.58 15.51c0-44-7.76-84.46-28.81-122.4C416.5 47.88 343.91 8 258.89 8 119 7.72 40.62 113.21 26.06 227.68c42.42-61.31 117.07-121.38 220.37-125 0 0 109.67 0 99.42 105H170c6.37-37.39 18.55-59 34.34-78.93-75.05 34.9-121.85 96.1-120.75 188.32.83 71.45 50.13 144.84 120.75 172 83.35 31.84 192.77 7.2 240.13-21.33V363.31c-80.87 56.49-270.87 60.92-272.26-67.57h314.08v-52.07Z" />
  </svg>
);

const SvgEdgeLegacy = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgEdgeLegacy;
