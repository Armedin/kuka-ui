import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M256 0c141.4 0 256 114.6 256 256S397.4 512 256 512 0 397.4 0 256 114.6 0 256 0zm24 263.3 59.1-90c8.2-11 5.2-25.9-5.8-33.3-11-7.3-25.9-4.3-33.3 6.7l-64 96c-2.6 3.9-4 8.6-4 13.3v136c0 13.3 10.7 24 24 24s24-10.7 24-24V263.3z" />
  </svg>
);

const SvgClockOneThirtySolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgClockOneThirtySolid;
