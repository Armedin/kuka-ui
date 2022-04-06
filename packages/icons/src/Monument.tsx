import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" {...props}>
    <path d="M180.7 4.686c6.2-6.248 16.4-6.248 22.6 0l80 80.004c2.6 2.54 4.2 5.87 4.6 9.44l32 271.97c1 8.8-5.3 16.8-14 17.8-8.8 1-16.8-5.3-17.8-14l-31.3-266.5-65.7-64.77-63.9 64.77-31.31 266.5c-1.03 8.7-8.98 15-17.76 14-8.78-1-15.05-9-14.02-17.8l32-271.97c.42-3.57 2.03-6.9 4.59-9.44l80-80.004zM144 304c0-8.8 7.2-16 16-16h64c8.8 0 16 7.2 16 16s-7.2 16-16 16h-64c-8.8 0-16-7.2-16-16zm200 112c22.1 0 40 17.9 40 40v16c0 22.1-17.9 40-40 40H40c-22.09 0-40-17.9-40-40v-16c0-22.1 17.91-40 40-40h304zM32 472c0 4.4 3.58 8 8 8h304c4.4 0 8-3.6 8-8v-16c0-4.4-3.6-8-8-8H40c-4.42 0-8 3.6-8 8v16z" />
  </svg>
);

const SvgMonument = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgMonument;
