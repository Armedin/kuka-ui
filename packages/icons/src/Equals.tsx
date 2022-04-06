import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
    <path d="M16 176h416c8.8 0 16-7.2 16-16s-7.156-16-16-16H16c-8.844 0-16 7.2-16 16s7.156 16 16 16zm416 160H16c-8.844 0-16 7.2-16 16s7.156 16 16 16h416c8.844 0 16-7.156 16-16s-7.2-16-16-16z" />
  </svg>
);

const SvgEquals = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgEquals;
