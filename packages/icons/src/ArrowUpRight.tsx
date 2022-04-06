import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" {...props}>
    <path d="M320 111.9v223.3c0 8.844-7.156 16-16 16s-16-7.156-16-16V150.6L27.3 411.3c-3.11 3.1-7.21 4.7-11.3 4.7s-8.188-1.562-11.31-4.688c-6.25-6.25-6.25-16.38 0-22.62l260.9-260.9-185.6-.555C71.11 127.2 63.97 120 64 111.2c.031-8.844 7.188-15.97 16-15.97l224 .656c8.9.054 16 7.214 16 16.014z" />
  </svg>
);

const SvgArrowUpRight = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgArrowUpRight;
