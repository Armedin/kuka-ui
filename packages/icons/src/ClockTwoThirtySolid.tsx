import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M512 256c0 141.4-114.6 256-256 256S0 397.4 0 256 114.6 0 256 0s256 114.6 256 256zM232 392c0 13.3 10.7 24 24 24s24-10.7 24-24V268.8l85.3-57.7c11-6.5 14-21.4 5.8-32.4-6.5-11-21.4-14-32.4-6.7l-96 64c-6.7 4.5-10.7 11.1-10.7 20v136z" />
  </svg>
);

const SvgClockTwoThirtySolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgClockTwoThirtySolid;
