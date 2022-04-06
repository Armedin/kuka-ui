import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" {...props}>
    <path d="M272 64c-8.8 0-16 7.16-16 16v134.2L81.53 70.88C76.03 66.34 69.38 64 62.63 64 52.28 64 32 72.13 32 96.03v319.9C32 439.9 52.28 448 62.63 448c6.75 0 13.41-2.344 18.91-6.875L256 297.8V432c0 8.844 7.156 16 16 16s16-7.156 16-16V80c0-8.84-7.2-16-16-16zM64 416.4V95.59L255.5 256 64 416.4z" />
  </svg>
);

const SvgForwardStep = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgForwardStep;
