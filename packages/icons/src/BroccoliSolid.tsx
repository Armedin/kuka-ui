import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M437.7 162.7c6.5-10 10.3-21.9 10.3-34.7 0-35.35-28.65-64-64-64-12.8 0-24.67 3.85-34.67 10.33C339.5 31.79 301.5 0 256 0s-83.5 31.79-93.3 74.33C152.7 67.85 140.8 64 128 64c-35.35 0-64 28.65-64 64 0 12.8 3.85 24.67 10.33 34.67C31.79 172.5 0 210.5 0 256c0 53.02 42.98 96 96 96h320c53.02 0 96-42.98 96-96 0-45.5-31.8-83.5-74.3-93.3zM256 431.2c-7.8-17.7-16.2-33.4-24.4-47.2h-96.9c10.9 13.4 40.52 53.05 58.59 106.8 4.31 12.8 16.51 21.2 30.01 21.2h65.34c13.49 0 25.76-8.422 30.06-21.21C336.8 437 366.4 397.4 377.3 384h-96.9c-8.2 13.8-16.6 29.5-24.4 47.2z" />
  </svg>
);

const SvgBroccoliSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgBroccoliSolid;
