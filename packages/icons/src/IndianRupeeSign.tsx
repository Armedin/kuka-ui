import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" {...props}>
    <path d="M.001 48c0-8.84 7.164-16 15.999-16h288c8.8 0 16 7.16 16 16s-7.2 16-16 16H202.5c28.7 23.24 48.3 57.3 52.6 96H304c8.8 0 16 7.2 16 16s-7.2 16-16 16h-48.9c-7.9 71.1-69 128-143.1 128H65.93L249.3 450.1c7.2 6 8.9 16 3.7 23.2-5.1 7.2-15.1 8.9-22.3 3.7L6.701 317c-5.659-4.9-8.059-11.3-5.936-17.9A16.014 16.014 0 0 1 16 288h96c56.4 0 103.1-41.7 110.9-96H16C7.165 192 .001 184.8.001 176S7.165 160 16 160h206.9c-7.8-54.3-54.5-96-110.9-96H16C7.165 64 .001 56.84.001 48z" />
  </svg>
);

const SvgIndianRupeeSign = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgIndianRupeeSign;
