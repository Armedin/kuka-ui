import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" {...props}>
    <path d="M180.7 395.3c3.1 3.1 7.2 4.7 11.3 4.7s8.188-1.562 11.31-4.688l144-144c6.25-6.25 6.25-16.38 0-22.62s-16.38-6.25-22.62 0L208 345.4V48c0-8.84-7.2-16-16-16s-16 7.16-16 16v297.4L59.31 228.7c-6.25-6.25-16.38-6.25-22.62 0s-6.25 16.38 0 22.62L180.7 395.3zM368 448H16c-8.844 0-16 7.2-16 16s7.156 16 16 16h352c8.844 0 16-7.156 16-16s-7.2-16-16-16z" />
  </svg>
);

const SvgArrowDownToLine = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgArrowDownToLine;
