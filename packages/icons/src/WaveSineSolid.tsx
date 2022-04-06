import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" {...props}>
    <path d="M638.6 297.2C633 315.9 580.4 480 463.1 480c-116.7 0-168.6-194.1-175-216.2C275.2 209 229.5 96 176 96 117.1 96 73.34 197.6 62.67 233.2c-5.1 16.9-22.92 26.5-39.84 21.5-16.941-5.1-26.55-23-21.472-39.9C6.983 196.1 59.56 32 176 32c117.6 0 169.5 194.1 175 216.3C364.8 302.1 410.5 416 463.1 416c58.92 0 102.7-101.6 113.3-137.2 5.109-16.94 22.97-26.44 39.84-21.47 17.86 5.07 27.46 22.97 22.36 39.87z" />
  </svg>
);

const SvgWaveSineSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgWaveSineSolid;
