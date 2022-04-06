import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" {...props}>
    <path d="M352 0c8.9 0 17.4 3.692 23.4 10.19 6.1 6.5 9.2 15.23 8.5 24.09L355.1 437.7c-3 41.9-37.8 74.3-79.8 74.3H108.7c-41.98 0-76.81-32.4-79.8-74.3L.081 34.28A32.008 32.008 0 0 1 8.58 10.19 32.009 32.009 0 0 1 32 0h320zM97.19 168.6c19.41 9.7 42.21 9.7 61.61 0 20.9-10.5 45.5-10.5 66.4 0 19.4 9.7 42.2 9.7 61.6 0l24.2-12.1 6.6-92.5H66.37l6.6 92.5 24.22 12.1z" />
  </svg>
);

const SvgGlassWaterSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgGlassWaterSolid;
