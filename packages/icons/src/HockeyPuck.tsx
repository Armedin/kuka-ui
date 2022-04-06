import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M256 80C128.8 80 0 112.97 0 176v160c0 63.03 128.8 96 256 96s256-32.97 256-96V176c0-63.9-128.8-96-256-96zm0 32c136.7 0 224 37.91 224 64s-87.27 64-224 64-224-37.91-224-64 87.3-64 224-64zm0 288c-136.7 0-224-37.91-224-64V224.9c46.06 31 135.3 47.1 224 47.1s177.9-16.06 224-47.1V336c0 26.1-87.3 64-224 64z" />
  </svg>
);

const SvgHockeyPuck = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgHockeyPuck;
