import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" {...props}>
    <path d="M304 480H48c-8.84 0-16-7.2-16-16V48c0-8.84 7.16-16 16-16s16 7.16 16 16v400h240c8.844 0 16 7.156 16 16s-7.2 16-16 16z" />
  </svg>
);

const SvgL = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgL;
