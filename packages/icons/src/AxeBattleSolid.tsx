import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M256 32c-17.67 0-32 14.33-32 32v431.1c0 9.7 7.2 16.9 16 16.9h32c8.836 0 16-7.164 16-15.1V64c0-17.67-14.3-32-32-32zM101 13.61C97.875.61 83.34-4.52 74.22 4.734 28.63 50.86 0 117.6 0 192s28.62 141.1 74.25 187.3c9.125 9.252 23.66 4.126 26.78-8.876C112.9 320.6 147.8 282.1 192 269.1V114.9c-44.2-13-79.1-51.53-91-101.29zM512 160.9c-6.875-61.76-33.63-116.7-73-156.2-9.25-9.252-24.08-4.107-27.21 8.895C399.8 63.37 364.6 101.9 320 114.9v154.3c44.63 13 79.79 51.49 91.79 101.3 3.125 13 17.96 18.15 27.21 8.896C478.4 339.8 505.1 284.9 512 223.1L449.3 192l62.7-31.1z" />
  </svg>
);

const SvgAxeBattleSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgAxeBattleSolid;
