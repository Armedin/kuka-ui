import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
    <path d="M432 240H16c-8.844 0-16 7.2-16 16s7.156 16 16 16h416c8.8 0 16-7.2 16-16s-7.2-16-16-16zm-208-48c35.35 0 64-28.65 64-64s-28.65-64-64-64-64 28.65-64 64 28.7 64 64 64zm0-96c17.64 0 32 14.36 32 32s-14.36 32-32 32-32-14.4-32-32 14.4-32 32-32zm0 224c-35.35 0-64 28.65-64 64s28.65 64 64 64 64-28.65 64-64-28.7-64-64-64zm0 96c-17.64 0-32-14.36-32-32s14.36-32 32-32 32 14.36 32 32-14.4 32-32 32z" />
  </svg>
);

const SvgDivide = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgDivide;
