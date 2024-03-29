import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M0 160c0-53 114.6-96 256-96s256 43 256 96-114.6 96-256 96S0 213 0 160zm255.1 143.1c-98.7 0-198.37-19.7-255.1-60.9V352c0 53 114.6 96 256 96s256-43 256-96V242.2c-56.7 41.2-156.4 60.9-256.9 60.9z" />
  </svg>
);

const SvgHockeyPuckSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgHockeyPuckSolid;
