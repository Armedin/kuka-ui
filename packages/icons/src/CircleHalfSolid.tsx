import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M256 480c0 17.7-14.4 32.2-31.9 30C97.75 494.3 0 386.6 0 255.1 0 125.4 97.75 17.69 224.1 1.971 241.6-.211 256 14.33 256 31.1V480z" />
  </svg>
);

const SvgCircleHalfSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgCircleHalfSolid;
