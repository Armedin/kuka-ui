import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256 256-114.6 256-256S397.4 0 256 0zm12 384h-44.6c-28.23 0-53.2-18-62.13-44.78-4.188-12.59 2.609-26.19 15.19-30.38C189 304.8 202.6 311.5 206.8 324c2.4 7.2 9 12 16.6 12H268c19.84 0 36-16.16 36-36s-16.2-36-36-36h-52a24.01 24.01 0 0 1-22.38-15.31C190 239.5 192.5 229 199.8 222.3l50.5-46.3H184c-13.2 0-24-10.7-24-24s10.8-24 24-24h128a24.01 24.01 0 0 1 22.38 15.31 24 24 0 0 1-6.156 26.38L277.2 216.5c42 4.6 74.8 40.3 74.8 83.5 0 46.3-37.7 84-84 84z" />
  </svg>
);

const SvgCircle3Solid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgCircle3Solid;
