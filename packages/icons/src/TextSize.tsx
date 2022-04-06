import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" {...props}>
    <path d="M0 48v96c0 8.8 7.156 16 16 16s16-7.2 16-16V64h144v384h-64c-8.8 0-16 7.2-16 16s7.2 16 16 16h160c8.8 0 16-7.2 16-16s-7.2-16-16-16h-64V64h144v80c0 8.8 7.2 16 16 16s16-7.2 16-16V48c0-8.84-7.2-16-16-16H16C7.156 32 0 39.16 0 48zm320 192v64c0 8.844 7.156 16 16 16s16-7.2 16-16v-48h112v192h-48c-8.844 0-16 7.156-16 16s7.2 16 16 16h128c8.844 0 16-7.156 16-16s-7.2-16-16-16h-48V256h112v48c0 8.844 7.156 16 16 16s16-7.2 16-16v-64c0-8.8-7.2-16-16-16H336c-8.8 0-16 7.2-16 16z" />
  </svg>
);

const SvgTextSize = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgTextSize;
