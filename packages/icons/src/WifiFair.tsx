import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" {...props}>
    <path d="M320 192c-77.8 0-150.9 30.1-203.4 84.8-6.2 6.3-6.1 16.5.2 22.6 6.375 6.219 16.5 6.031 22.63-.25C186.8 250.7 250.9 224 320 224s133.2 26.69 180.6 75.19c3.1 3.21 7.2 4.81 11.4 4.81 4.031 0 8.063-1.5 11.19-4.562 6.313-6.156 6.438-16.31.25-22.62C470 222.1 397.8 192 320 192zm-.9 160c-35.35 0-64 28.65-64 63.1s28.66 64 64 64 64-28.65 64-64-27.8-63.1-64-63.1zm.9 96c-17.64 0-32-14.36-32-32s14.4-32 32-32 32 14.36 32 32-14.4 32-32 32z" />
  </svg>
);

const SvgWifiFair = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgWifiFair;
