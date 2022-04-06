import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" {...props}>
    <path d="m4.688 148.7 144-144C151.8 1.562 155.9 0 160 0s8.188 1.562 11.31 4.688l144 144c6.25 6.25 6.25 16.38 0 22.62s-16.38 6.25-22.62 0L176 54.63V496c0 8.844-7.156 16-16 16s-16-7.156-16-16V54.63L27.31 171.3c-6.25 6.25-16.38 6.25-22.62 0s-6.253-16.4-.002-22.6z" />
  </svg>
);

const SvgArrowUpLong = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgArrowUpLong;
