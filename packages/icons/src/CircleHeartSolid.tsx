import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M0 256C0 114.6 114.6 0 256 0s256 114.6 256 256-114.6 256-256 256S0 397.4 0 256zm233.5 128.2c6.2 6.3 14.4 9.4 22.5 9.4s16.3-3.1 22.5-9.4l101.6-104.1c29.4-28.9 29.4-77.3 0-107.1-29.3-29.8-77-29.8-106.4 0L256 191l-17.7-18c-29.4-29.8-77.1-29.8-106.4 0-29.4 29.8-29.4 78.2 0 107.1l101.6 104.1z" />
  </svg>
);

const SvgCircleHeartSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgCircleHeartSolid;
