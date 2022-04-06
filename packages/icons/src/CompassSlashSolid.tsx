import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" {...props}>
    <path d="M134.2 79.88C180.9 30.69 246.8.001 319.1.001 461.4.001 576 114.6 576 256c0 50.1-14.9 98.5-40.6 138.4l95.4 74.7c10.4 8.2 12.3 23.3 4.1 33.7-8.2 10.4-23.3 12.3-33.7 4.1L9.196 42.89C-1.236 34.71-3.065 19.63 5.112 9.196 13.29-1.236 28.37-3.065 38.81 5.112L134.2 79.88zM270.3 186.5l126.8 99.4 47.5-123.5c7.5-20.3-11.6-38.5-31-31l-143.3 55.1zM63.1 256c0-33.6 7.39-65.8 19.18-95.2L224.8 273.1l-29.4 76.5c-7.5 19.4 10.7 38.5 31 31l90.6-34.8 151.1 119c-41.8 29.7-92.9 47.2-149 47.2-140.5 0-256-114.6-256-256z" />
  </svg>
);

const SvgCompassSlashSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgCompassSlashSolid;
