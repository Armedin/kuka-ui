import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 512" {...props}>
    <path d="M113.1 54.93C100.9 39.64 82.46 32 63.99 32s-36.93 7.643-49.1 22.93C2.692 70.21-2.372 90.22 1.044 109.9l25.21 145.2C29.55 274.1 45.44 288 63.99 288s34.44-13.89 37.74-32.99l25.24-145.2c3.43-19.59-1.67-39.6-13.87-54.88zM70.2 249.6c-.63 3.6-3.3 6.4-6.21 6.4s-5.57-2.8-6.21-6.5L32.57 104.3c-1.844-10.59.83-21.33 7.357-29.51C45.42 67.96 54.19 64 63.99 64s18.57 3.957 24.09 10.89c6.506 8.152 9.188 18.9 7.361 29.46L70.2 249.6z" />
  </svg>
);

const SvgTick = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgTick;
