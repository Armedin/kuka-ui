import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
    <path d="M119.4 448c-11 19.1-31.71 32-55.4 32-35.35 0-64-28.7-64-64 0-23.7 12.87-44.4 32-55.4V151.4C12.87 140.4 0 119.7 0 96c0-35.35 28.65-64 64-64 23.69 0 44.4 12.87 55.4 32h209.2c11-19.13 31.7-32 55.4-32 35.3 0 64 28.65 64 64 0 23.7-12.9 44.4-32 55.4v209.2c19.1 11 32 31.7 32 55.4 0 35.3-28.7 64-64 64-23.7 0-44.4-12.9-55.4-32H119.4zM96 360.6c9.7 5.6 17.8 13.7 23.4 23.4h209.2c5.6-9.7 13.7-17.8 23.4-23.4V151.4c-9.7-5.6-17.8-13.7-23.4-23.4H119.4c-5.6 9.7-13.7 17.8-23.4 23.4v209.2z" />
  </svg>
);

const SvgDrawSquareSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgDrawSquareSolid;
