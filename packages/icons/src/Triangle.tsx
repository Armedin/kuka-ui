import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M262.9 67.95C261.5 65.5 258.8 64 256 64c-2.8 0-5.5 1.5-6.9 3.95l-27.6-16.2C228.7 39.52 241.8 32 256 32s27.3 7.52 34.5 19.75l216 368.05c7.3 12.3 7.3 27.6.2 40.1-7.1 12.4-20.4 20.1-34.7 20.1H40c-14.34 0-27.59-7.7-34.713-20.1-7.126-12.5-7.043-27.8.216-40.1L221.5 51.75l27.6 16.2-216 367.15c-1.45 3.3-1.47 6.4-.04 8 1.42 3.4 4.07 4.9 6.94 4.9h432c2.9 0 5.5-1.5 6.9-4.9 1.5-1.6 1.5-4.7 0-8l-216-367.15z" />
  </svg>
);

const SvgTriangle = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgTriangle;
