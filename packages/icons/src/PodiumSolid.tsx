import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
    <path d="M108.8 511.1h230.4c16.31 0 30.16-12.26 31.96-28.47L400 223.1H48l28.84 259.5c1.8 17.1 15.65 28.5 31.96 28.5zm315.2-368H127.4c6.375-30.88 30.75-55.25 62.75-61.1 8.65 8.62 20.65 13.1 33.85 13.1h62.2c23.21 0 44.5-15.69 48.89-38.48C340.1 26.85 317.6 0 288 0h-64c-22 0-40.5 15-46.13 35.25-52 11.62-91.75 55-98.5 108.8l-56.27-.95c-12.35 0-23.1 11.6-23.1 24 0 13.25 10.75 24 23.1 24h400c13.25 0 24-10.75 24-24 .9-12.4-9.8-24-23.1-24z" />
  </svg>
);

const SvgPodiumSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgPodiumSolid;
