import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" {...props}>
    <path d="m315.3 363.3-144 144c-3.1 3.1-7.2 4.7-11.3 4.7s-8.188-1.562-11.31-4.688l-144-144c-6.25-6.25-6.25-16.38 0-22.62s16.38-6.25 22.62 0L144 457.4V16c0-8.844 7.2-16 16-16s16 7.156 16 16v441.4l116.7-116.7c6.25-6.25 16.38-6.25 22.62 0s6.28 16.4-.02 22.6z" />
  </svg>
);

const SvgArrowDownLong = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgArrowDownLong;
