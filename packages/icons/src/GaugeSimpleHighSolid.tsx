import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M512 256c0 141.4-114.6 256-256 256S0 397.4 0 256 114.6 0 256 0s256 114.6 256 256zm-207.3 54.4 76.6-147.3c6.1-11.8 1.5-26.3-10.2-32.4-11.8-6.1-26.3-1.5-32.4 10.2l-76.6 147.4c-2-.2-4-1.2-7-1.2-34.4 0-64 29.6-64 64.9 0 35.3 29.6 64 64 64 36.2 0 64.9-28.7 64.9-64 0-15.9-5.8-30.4-15.3-41.6z" />
  </svg>
);

const SvgGaugeSimpleHighSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgGaugeSimpleHighSolid;
