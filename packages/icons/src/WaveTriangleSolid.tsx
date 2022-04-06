import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" {...props}>
    <path d="M633.6 274.9 490.5 467.2c-6.9 8-16.4 12.8-27.4 12.8s-19.56-4.758-25.59-12.83L176 116.8 57.6 274.9c-10.58 14.2-30.61 17-44.8 6.4-14.14-10.61-16.1-30.71-6.391-44.85l143.1-192.3c12.06-16.15 39.12-16.15 51.19 0l262.4 350.4 118.4-158.1c10.59-14.18 30.62-16.1 44.8-6.417C641.3 240.6 644.2 260.7 633.6 274.9z" />
  </svg>
);

const SvgWaveTriangleSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgWaveTriangleSolid;
