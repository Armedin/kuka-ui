import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M128 224c0-8.8 7.2-16 16-16s16 7.2 16 16v64c0 8.8-7.2 16-16 16s-16-7.2-16-16v-64zm64-96c0-8.8 7.2-16 16-16s16 7.2 16 16v160c0 8.8-7.2 16-16 16s-16-7.2-16-16V128zm64 64c0-8.8 7.2-16 16-16s16 7.2 16 16v96c0 8.8-7.2 16-16 16s-16-7.2-16-16v-96zM0 208C0 93.12 93.12 0 208 0c114.9 0 208 93.12 208 208 0 51.7-18.8 98.1-50.9 135.3l142.2 141.4c6.3 6.2 6.3 16.4 0 22.6-6.2 6.3-16.4 6.3-22.6 0L343.3 365.1C306.1 397.2 259.7 416 208 416 93.12 416 0 322.9 0 208zm208 176c97.2 0 176-78.8 176-176S305.2 32 208 32 32 110.8 32 208s78.8 176 176 176z" />
  </svg>
);

const SvgMagnifyingGlassChart = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgMagnifyingGlassChart;
