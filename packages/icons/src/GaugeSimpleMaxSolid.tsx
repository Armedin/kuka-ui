import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M512 256c0 141.4-114.6 256-256 256S0 397.4 0 256 114.6 0 256 0s256 114.6 256 256zm-192.9 85.2 117.5-72.8c11.3-7 14.8-21.8 7.8-33-7-11.3-21.8-14.8-33-7.8l-117.6 72.8c-10.6-7.8-23.7-12.4-37.8-12.4-35.3 0-64 28.7-64 64s28.7 64 64 64 64-28.7 64-64c0-3.7-.3-7.3-.9-10.8z" />
  </svg>
);

const SvgGaugeSimpleMaxSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgGaugeSimpleMaxSolid;
