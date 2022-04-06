import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M288 512h-64V248c0-30.9-25.1-56-56-56s-56 25.1-56 56v12.1c29.3 10.8 48 35.4 48 71 0 28-35.8 79.4-80 116.9-44.17-37.5-80-87.6-80-116.9 0-35.6 18.67-60.2 48-71V248c0-66.3 53.7-120 120-120 20.2 0 39.3 5 56 13.8V120C224 53.73 277.7 0 344 0s120 53.73 120 120v12.1c29.3 10.8 48 35.4 48 71 0 28-35.8 79.4-80 116.9-44.2-37.5-80-87.6-80-116.9 0-35.6 18.7-60.2 48-71V120c0-30.93-25.1-56-56-56s-56 25.07-56 56v392z" />
  </svg>
);

const SvgPlantWiltSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgPlantWiltSolid;
