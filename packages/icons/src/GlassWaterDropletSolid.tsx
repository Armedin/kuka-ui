import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" {...props}>
    <path d="M256 196c0 33.1-28.7 60-64 60s-64-26.9-64-60c0-24.9 33.7-70.1 52.2-93.5 6.1-7.73 17.5-7.73 23.6 0 18.5 23.4 52.2 68.6 52.2 93.5zM352 0c8.9 0 17.4 3.692 23.4 10.19 6.1 6.5 9.2 15.23 8.5 24.09L355.1 437.7c-3 41.9-37.8 74.3-79.8 74.3H108.7c-41.98 0-76.81-32.4-79.8-74.3L.081 34.28A32.008 32.008 0 0 1 8.58 10.19 32.009 32.009 0 0 1 32 0h320zM96 304c20.1 10.1 43.9 10.1 64 0s43.9-10.1 64 0 43.9 10.1 64 0l12.1-6.5L317.6 64H66.37l16.68 233.5L96 304z" />
  </svg>
);

const SvgGlassWaterDropletSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgGlassWaterDropletSolid;
