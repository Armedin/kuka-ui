import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" {...props}>
    <path d="M0 96c0-35.35 28.65-64 64-64h448c35.3 0 64 28.65 64 64v288c0 35.3-28.7 64-64 64 0 17.7-14.3 32-32 32s-32-14.3-32-32H128c0 17.7-14.3 32-32 32-17.67 0-32-14.3-32-32-35.35 0-64-28.7-64-64V96zm96 232c0 13.3 10.7 24 24 24h272c13.3 0 24-10.7 24-24V152c0-13.3-10.7-24-24-24H120c-13.3 0-24 10.7-24 24v176zm400-216c-8.8 0-16 7.2-16 16v224c0 8.8 7.2 16 16 16s16-7.2 16-16V128c0-8.8-7.2-16-16-16z" />
  </svg>
);

const SvgMicrowaveSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgMicrowaveSolid;
