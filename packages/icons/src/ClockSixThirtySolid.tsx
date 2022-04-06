import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M256 0c141.4 0 256 114.6 256 256S397.4 512 256 512 0 397.4 0 256 114.6 0 256 0zm24 256c0-13.3-10.7-24-24-24s-24 10.7-24 24v136c0 13.3 10.7 24 24 24s24-10.7 24-24V256z" />
  </svg>
);

const SvgClockSixThirtySolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgClockSixThirtySolid;
