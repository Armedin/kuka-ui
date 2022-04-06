import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" {...props}>
    <path d="M316.9 454.5c5.219 7.125 3.687 17.16-3.437 22.38a15.95 15.95 0 0 1-9.469 3.094c-4.906 0-9.781-2.25-12.91-6.531L124.9 246.8 32 338.28v125.7c0 8.844-7.156 16-15.1 16s-15.1-7.156-15.1-16v-416c0-8.844 7.156-16 15.1-16s15.1 7.156 15.1 16v245.4l260.8-256.8c6.219-6.156 16.41-6.156 22.62.187 6.187 6.281 6.125 16.41-.188 22.62L147.9 224.1l169 230.4z" />
  </svg>
);

const SvgK = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgK;
