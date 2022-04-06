import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" {...props}>
    <path d="M617.6 242.4c-9.367-7.158-19.06-1.291-22.4 3.245l-118.4 162.8c-5.934 8.166-19.64 8.18-25.56-.012L214.4 83.04C205.7 71.12 191.4 64 175.1 64c-14.5 0-28.8 7.1-37.5 19L19.18 245.7c-5.27 6.4-3.84 17.7 3.19 23.1 9.448 7.24 19.12 1.289 22.44-3.303l118.4-162.7c5.935-8.166 19.64-8.18 25.56.012l236.8 325.4C434.7 440.8 448.7 448 464 448c15.24 0 29.24-7.21 38.4-19.78L620.8 265.5c5.3-7.3 3.9-17.6-3.2-23.1z" />
  </svg>
);

const SvgWaveTriangle = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgWaveTriangle;
