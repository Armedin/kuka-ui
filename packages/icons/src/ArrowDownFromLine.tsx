import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" {...props}>
    <path d="M324.7 308.7 208 425.4V128c0-8.844-7.156-16-16-16s-16 7.2-16 16v297.4L59.31 308.7c-6.25-6.25-16.38-6.25-22.62 0s-6.25 16.38 0 22.62l144 144C183.8 478.4 187.9 480 192 480s8.188-1.562 11.31-4.688l144-144c6.25-6.25 6.25-16.38 0-22.62s-16.41-6.292-22.61.008zM368 32H16C7.156 32 0 39.16 0 48s7.156 16 16 16h352c8.8 0 16-7.16 16-16s-7.2-16-16-16z" />
  </svg>
);

const SvgArrowDownFromLine = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgArrowDownFromLine;
