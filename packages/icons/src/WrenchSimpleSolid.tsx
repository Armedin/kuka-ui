import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" {...props}>
    <path d="M384 172.4c0 71.02-38.7 132.8-96 166v125.5c0 26.6-21.5 48.1-48 48.1h-96c-26.5 0-48-21.5-48-48.9V337.6c-57.3-33.22-96-94.99-96-166C0 97.19 42.4 32.8 104.3 1 115.1-3.711 128 3.992 128 16.1V160l64 64 64-64V16.1c0-12.11 12.93-19.81 23.7-14.27C341.6 33.67 384 98.04 384 172.4z" />
  </svg>
);

const SvgWrenchSimpleSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgWrenchSimpleSolid;
