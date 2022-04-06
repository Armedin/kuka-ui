import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" {...props}>
    <path d="M384 48c0 8.84-7.2 16-16 16H208v400c0 8.844-7.156 16.01-16 16.01s-16-7.21-16-16.01V64H16C7.156 64 0 56.84 0 48s7.156-16 16-16h352c8.8 0 16 7.16 16 16z" />
  </svg>
);

const SvgT = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgT;
