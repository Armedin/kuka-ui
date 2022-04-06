import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" {...props}>
    <path d="M320 464c0 8.844-7.156 16-16 16H16c-8.844 0-16-7.2-16-16V48c0-8.84 7.156-16 16-16h288c8.8 0 16 7.16 16 16s-7.2 16-16 16H32v176h208c8.844 0 16 7.162 16 16.01 0 8.79-7.2 15.99-16 15.99H32v176h272c8.8 0 16 7.2 16 16z" />
  </svg>
);

const SvgE = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgE;
