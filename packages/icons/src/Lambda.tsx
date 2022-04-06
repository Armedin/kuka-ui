import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
    <path d="M448 464c0 8.799-7.199 16-16 16h-69.75a32.072 32.072 0 0 1-29.13-18.64L177.8 124.7 30.72 470.3c-2.59 6-8.5 9.7-14.71 9.7-2.094 0-4.219-.406-6.25-1.281-8.156-3.469-11.94-12.84-8.469-20.97l158.4-372.2L151.9 68.66c-1.3-2.84-4.2-4.66-7.3-4.66H16C7.199 64 0 56.8 0 48s7.199-16 16-16h133.8c12.52 0 23.89 7.277 29.13 18.64l181.2 392.7c1.27 2.96 4.17 4.66 7.27 4.66H432c8.8 0 16 7.2 16 16z" />
  </svg>
);

const SvgLambda = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgLambda;
