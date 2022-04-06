import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M0 256C0 114.6 114.6 0 256 0s256 114.6 256 256-114.6 256-256 256S0 397.4 0 256zm280-136c0-13.3-10.7-24-24-24s-24 10.7-24 24v136c0 8.9 4.9 16.1 12.7 21.2 7.8 4.1 17.2 3.7 24.6-2.1l96-64c11-6.5 14-21.4 5.8-32.4-6.5-11-21.4-14-32.4-6.7L280 211.2V120z" />
  </svg>
);

const SvgClockTwoSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgClockTwoSolid;
