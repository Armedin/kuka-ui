import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" {...props}>
    <path d="M539.3 224.1c92.31 0 100.7 82.36 100.7 105.7 0 82.16-67.03 182.2-192.1 182.2-39.88 0-73.85-10.22-101.6-26.74 72.31-67.57 69.58-151.3 69.58-155.5 0-53.36-22.6-86.5-42.37-104.6 13.31 1.428 27.88 4.658 43.48 9.602-25.36-78.68-79.69-137.1-113.6-167.4C285.3 145.4 261 197.1 241.4 229.5c15.22-3.639 29.09-5.393 41.81-5.393 92.31 0 100.6 82.42 100.6 105.7 0 82.16-66.98 182.2-191.9 182.2-124.9 0-191.1-100.1-191.1-182.2 0-23.27 8.325-105.7 100.6-105.7 21.21 0 45.92 4.875 74.13 15.48 16.41-17.14 63.79-79.87 89.55-219.9 2.151-11.67 12.43-19.68 23.63-19.68 24.61 0 145.7 106.5 180.2 238.4C495.1 228.6 518.8 224.1 539.3 224.1z" />
  </svg>
);

const SvgCherriesSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgCherriesSolid;
