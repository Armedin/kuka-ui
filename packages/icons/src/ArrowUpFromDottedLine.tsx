import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
    <path d="M128 424c-13.26 0-24 10.75-24 24s10.7 24 24 24 24-10.7 24-24-10.7-24-24-24zm96 0c-13.26 0-24 10.75-24 24s10.74 24 24 24 24-10.75 24-24-10.7-24-24-24zm-192 0c-13.26 0-24 10.75-24 24s10.74 24 24 24 24-10.7 24-24-10.74-24-24-24zm288 0c-13.26 0-24 10.75-24 24s10.74 24 24 24 24-10.75 24-24-10.7-24-24-24zm96 0c-13.26 0-24 10.75-24 24s10.74 24 24 24 24-10.75 24-24-10.7-24-24-24zM235.3 36.69C232.2 33.56 228.1 32 224 32s-8.2 1.56-11.3 4.69l-144 144c-6.25 6.25-6.25 16.38 0 22.62s16.38 6.25 22.62 0L208 86.63V352c0 8.844 7.156 16 16 16s16-7.156 16-16V86.63l116.7 116.7c6.25 6.25 16.38 6.25 22.62 0s6.25-16.38 0-22.62L235.3 36.69z" />
  </svg>
);

const SvgArrowUpFromDottedLine = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgArrowUpFromDottedLine;
