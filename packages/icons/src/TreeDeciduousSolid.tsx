import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M512 288c0 27.84-10.25 51.44-30.61 70.53-18.08 16.95-42.67 25.47-67.45 25.47H288v96c0 17.7-14.2 32-31.9 32s-33-14.3-33-32l.9-96H98.1c-24.79 0-49.37-8.525-67.45-25.47C10.25 339.4 0 315.8 0 288c0-19.38 5.375-36.1 16-52.1s25-27.62 43-35c-9.375-16-12.88-32.5-10.5-49.5s9.125-31.62 20.5-44 25.12-20.5 41.5-24.5 32.9-3.27 49.5 4.1c2.6-24.62 13.1-45.37 31.5-62S231.4 0 256 0s46.13 8.375 64.5 25 28.9 37.38 31.5 62c16.62-7.375 33.13-8.1 49.5-4.1s30.12 12.12 41.5 24.5 18.12 27 20.5 44-.875 33.5-9.5 49.5h-1c18 7.375 32.38 19 43 35s16 32.7 16 52.1z" />
  </svg>
);

const SvgTreeDeciduousSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgTreeDeciduousSolid;
