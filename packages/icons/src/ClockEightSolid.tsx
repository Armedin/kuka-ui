import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M0 256C0 114.6 114.6 0 256 0s256 114.6 256 256-114.6 256-256 256S0 397.4 0 256zm280-136c0-13.3-10.7-24-24-24s-24 10.7-24 24v123.2L146.7 300c-11 7.4-14 22.3-6.7 33.3 7.4 11 22.3 14 33.3 5.8l96-64c5.8-3.6 10.7-11.1 10.7-20V120z" />
  </svg>
);

const SvgClockEightSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgClockEightSolid;
