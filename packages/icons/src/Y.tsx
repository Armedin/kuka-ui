import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" {...props}>
    <path d="M380.9 57.49 208 293.29v170.8c0 8.844-7.154 15.99-15.1 15.99s-16-7.142-16-15.99V293.3L3.091 57.49c-5.219-7.12-3.688-17.15 3.438-22.37C13.59 29.87 23.68 31.4 28.9 38.56L192 260.96l163.1-222.4c5.219-7.156 15.34-8.625 22.38-3.438 7.12 5.218 8.62 15.248 3.42 22.368z" />
  </svg>
);

const SvgY = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgY;
