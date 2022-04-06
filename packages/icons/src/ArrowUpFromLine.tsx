import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" {...props}>
    <path d="M59.31 203.3 176 86.63V384c0 8.844 7.156 16 16 16s16-7.156 16-16V86.63l116.7 116.7c6.25 6.25 16.38 6.25 22.62 0s6.25-16.38 0-22.62l-144-144C200.2 33.56 196.1 32 192 32s-8.2 1.56-11.3 4.69l-144 144c-6.25 6.25-6.25 16.38 0 22.62s16.36 6.29 22.61-.01zM368 448H16c-8.844 0-16 7.2-16 16s7.156 16 16 16h352c8.844 0 16-7.156 16-16s-7.2-16-16-16z" />
  </svg>
);

const SvgArrowUpFromLine = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgArrowUpFromLine;
