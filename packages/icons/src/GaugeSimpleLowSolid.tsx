import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M512 256c0 141.4-114.6 256-256 256S0 397.4 0 256 114.6 0 256 0s256 114.6 256 256zm-256 32c-2.1 0-4.1.1-6.1.3l-76.6-147.4c-6.1-11.7-20.6-16.3-32.4-10.2-11.7 6.1-16.3 20.6-10.2 32.4l76.6 147.3c-9.5 11.2-16.2 25.7-16.2 41.6 0 35.3 29.6 64 64 64 36.2 0 64.9-28.7 64.9-64s-28.7-64-64.9-64h.9z" />
  </svg>
);

const SvgGaugeSimpleLowSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgGaugeSimpleLowSolid;
