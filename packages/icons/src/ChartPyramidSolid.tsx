import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M349 159.1H162.1l59.3-99.38c15.5-26.46 53.7-26.46 69.2 0L349 159.1zm-279.38 160 74.68-128h223.4l74.7 128H69.62zM461 352l39.6 67.8c15.6 26.7-3.7 60.2-34.5 60.2H45.93c-30.87 0-50.109-33.5-34.55-60.2L50.95 352H461z" />
  </svg>
);

const SvgChartPyramidSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgChartPyramidSolid;
