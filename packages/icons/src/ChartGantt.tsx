import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M16 32c8.84 0 16 7.16 16 16v352c0 26.5 21.49 48 48 48h416c8.8 0 16 7.2 16 16s-7.2 16-16 16H80c-44.18 0-80-35.8-80-80V48c0-8.84 7.164-16 16-16zm112 112c0-8.8 7.2-16 16-16h128c8.8 0 16 7.2 16 16s-7.2 16-16 16H144c-8.8 0-16-7.2-16-16zm240 80c8.8 0 16 7.2 16 16s-7.2 16-16 16H208c-8.8 0-16-7.2-16-16s7.2-16 16-16h160zm96 96c8.8 0 16 7.2 16 16s-7.2 16-16 16h-96c-8.8 0-16-7.2-16-16s7.2-16 16-16h96z" />
  </svg>
);

const SvgChartGantt = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgChartGantt;
