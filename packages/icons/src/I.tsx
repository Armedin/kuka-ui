import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" {...props}>
    <path d="M320 464c0 8.844-7.156 16-16 16H16c-8.844 0-16-7.2-16-16s7.156-16 16-16h128V64H16C7.156 64 0 56.84 0 48s7.156-16 16-16h288c8.8 0 16 7.16 16 16s-7.2 16-16 16H176v384h128c8.8 0 16 7.2 16 16z" />
  </svg>
);

const SvgI = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgI;
