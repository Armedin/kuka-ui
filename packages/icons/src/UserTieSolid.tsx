import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
    <path d="M352 128c0 70.7-57.3 128-128 128S96 198.7 96 128C96 57.31 153.3 0 224 0s128 57.31 128 128zM209.1 359.2 176 304h96l-33.1 55.2 33.3 123.9 39.5-161.2c77.2 12 136.3 78.8 136.3 159.4 0 16.9-13.8 30.7-30.7 30.7H30.72C13.75 512 0 498.2 0 481.3c0-80.6 59.09-147.4 136.3-159.4l39.5 161.2 33.3-123.9z" />
  </svg>
);

const SvgUserTieSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgUserTieSolid;