import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M512 256c0 141.4-114.6 256-256 256S0 397.4 0 256 114.6 0 256 0s256 114.6 256 256zM232 392c0 13.3 10.7 24 24 24s24-10.7 24-24V256c0-4.7-1.4-9.4-4.9-13.3l-64-96c-6.5-11-21.4-14-32.4-6.7-11 7.4-14 22.3-6.7 33.3l60 90V392z" />
  </svg>
);

const SvgClockElevenThirtySolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgClockElevenThirtySolid;
