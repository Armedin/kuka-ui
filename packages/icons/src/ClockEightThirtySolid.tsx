import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M512 256c0 141.4-114.6 256-256 256S0 397.4 0 256 114.6 0 256 0s256 114.6 256 256zM232 392c0 13.3 10.7 24 24 24s24-10.7 24-24V256c0-8.9-4.9-17-12.7-21.2-7.8-4.1-17.2-3.7-24.6 1.2l-96 64c-11 7.4-14 22.3-6.7 33.3 7.4 11 22.3 14 33.3 5.8l57.8-38.3.9 91.2z" />
  </svg>
);

const SvgClockEightThirtySolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgClockEightThirtySolid;
