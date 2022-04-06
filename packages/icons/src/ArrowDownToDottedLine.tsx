import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
    <path d="M128 424c-13.26 0-24 10.75-24 24s10.7 24 24 24 24-10.7 24-24-10.7-24-24-24zm96 0c-13.26 0-24 10.75-24 24s10.74 24 24 24 24-10.75 24-24-10.7-24-24-24zm-192 0c-13.26 0-24 10.75-24 24s10.74 24 24 24 24-10.7 24-24-10.74-24-24-24zm288 0c-13.26 0-24 10.75-24 24s10.74 24 24 24 24-10.75 24-24-10.7-24-24-24zm96 0c-13.26 0-24 10.75-24 24s10.74 24 24 24 24-10.75 24-24-10.7-24-24-24zm-203.3-60.7c3.1 3.1 7.2 3.8 11.3 3.8s8.188-1.562 11.31-4.688l144-144c6.25-6.25 6.25-16.38 0-22.62s-16.38-6.25-22.62 0L240 313.4V47.1c0-8.844-7.156-16-16-16s-16 7.156-16 16v265.4L91.31 196.7c-6.25-6.25-16.38-6.25-22.62 0s-6.25 16.38 0 22.62L212.7 363.3z" />
  </svg>
);

const SvgArrowDownToDottedLine = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgArrowDownToDottedLine;
