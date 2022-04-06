import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="m256 96-12-11.98V84c-32.6-32.63-79.9-47.49-124.6-39.9C50.52 55.58 0 115.2 0 185.1v5.8c0 41.5 17.23 81.2 47.59 109.5L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9V96z" />
  </svg>
);

const SvgHeartHalfSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgHeartHalfSolid;
