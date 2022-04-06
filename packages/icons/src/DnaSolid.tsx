import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
    <path d="M.12 494.1c-1.126 9.5 6.311 17.87 15.94 17.87l32.06.064c8.124 0 15.21-5.833 16.21-13.83.75-4.875 1.868-11.17 3.493-18.17h312c1.625 6.875 2.904 13.31 3.53 18.18 1.124 7.1 7.84 13.94 15.97 13.82l32.46-.063c9.624 0 17.12-8.374 15.99-17.87-4.626-37.87-25.75-128.1-119.1-207.7-17.5 12.37-36.98 24.37-58.48 35.49 6.25 4.625 11.56 9.405 17.06 14.15H159.7c21.25-18.12 47.03-35.63 78.65-51.38 172.1-85.5 203.7-218.8 209.5-266.7 1.125-9.5-6.297-17.88-15.92-17.88L399.6.001c-8.125 0-14.84 5.832-15.96 13.83-.75 4.875-1.869 11.17-3.369 18.17H67.74C66.24 25 65.08 18.81 64.33 13.81 63.21 5.813 56.48-.124 48.36.001L16.1.134C6.475.134-.99 8.488.14 17.984c5.125 42.87 31.29 153.8 159.9 238.1C31.55 340.3 5.245 451.2.12 494.1zM223.9 219.7c-25.1-13.8-46.3-28.4-64.2-43.7h128.5c-17.8 15.3-39.2 30.1-64.3 43.7zM355.1 96c-5.875 10.37-12.88 21.12-21 31.1h-221c-8.25-10.87-15.3-21.63-21.05-32l263.05.9zM93 415.1c5.875-10.37 12.74-21.13 20.87-32h219.4c8.375 10.87 15.48 21.63 21.23 32H93z" />
  </svg>
);

const SvgDnaSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgDnaSolid;