import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M0 256C0 114.6 114.6 0 256 0s256 114.6 256 256-114.6 256-256 256S0 397.4 0 256zm168.9 32H66.65C80.14 368.4 143.6 431.9 224 445.3v-86.4L168.9 288zM288 358.9v86.4c80.4-13.4 143.9-76.9 157.3-157.3H343.1L288 358.9zM352 224h93.3C430.1 133.2 351.1 64 256 64c-95.1 0-174.11 69.2-189.35 160H160l7.2-14.3c5.4-10.9 16.5-17.7 28.6-17.7h120.4c12.1 0 23.2 6.8 28.6 17.7L352 224z" />
  </svg>
);

const SvgSteeringWheelSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgSteeringWheelSolid;
