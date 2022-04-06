import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M256 468.5c0 6.4-5.1 11.5-11.5 11.5-2.9 0-5.7-1.1-7.8-3.1L47.59 300.4C17.23 272.1 0 232.4 0 190.9v-5.8c0-69.9 50.52-129.52 119.4-141 44.7-7.59 92 7.27 124.6 39.92L256 96v372.5zm-32-359.2-2.6-2.7c-25.3-25.29-61.4-36.83-96.7-30.94C71.21 84.58 32 130.9 32 185.1v5.8c0 32.7 13.55 63.8 37.42 86.1L224 421.3v-312z" />
  </svg>
);

const SvgHeartHalf = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgHeartHalf;
