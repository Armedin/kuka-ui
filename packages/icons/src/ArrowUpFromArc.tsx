import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M480 256c0-8.8 7.2-16 16-16s16 7.2 16 16c0 141.4-114.6 256-256 256S0 397.4 0 256c0-8.8 7.164-16 16-16 8.84 0 16 7.2 16 16 0 123.7 100.3 224 224 224s224-100.3 224-224zM244 5.37C247.1 1.955 251.4 0 255.1 0c5.5 0 9.8 1.954 12 5.37l128 144.03c6.7 5.7 6.1 16.7-.5 21.7-6.6 6.7-16.7 6.1-22.6-.5L272 58.08V336c0 8.8-7.2 16-16.9 16-7.9 0-16-7.2-16-16V58.08l-100 112.52c-5 6.6-16 7.2-21.7.5-6.6-5-7.2-16-1.4-21.7L244 5.37z" />
  </svg>
);

const SvgArrowUpFromArc = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgArrowUpFromArc;
