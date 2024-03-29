import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
    <path d="M49.61 332.5c9.37-9.4 24.57-9.4 33.94 0 68.75 68.7 180.15 68.7 248.95 0 68.7-68.8 68.7-180.2 0-248.95-9.4-9.37-9.4-24.57 0-33.94L367 15.03c9.4-9.373 24.6-9.373 33.1 0 10.2 9.37 10.2 24.57 0 33.94l-17.6 18.51c71 87.92 65.6 217.12-16.1 298.92-37.6 37.6-85.3 59.1-134.4 64.3V464h96c13.3 0 24 10.7 24 24s-10.7 24-24 24H87.1c-12.36 0-24-10.7-24-24s11.64-24 24-24h96v-33.3c-40.7-4.4-81.3-20.5-115.62-48.2l-18.51 17.6c-9.37 10.2-24.57 10.2-33.94 0-9.373-8.5-9.373-23.7 0-33.1l34.58-34.5zM64 207.1c0-78.6 64.5-144 144-144s144 65.4 144 144c0 80.4-64.5 144.9-144 144.9S64 287.5 64 207.1z" />
  </svg>
);

const SvgGlobeStandSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgGlobeStandSolid;
