import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
    <path d="M438.4 230.1c12.8 14.9 12.8 36 0 51.8l-184 216c-7.6 9-18.7 14.1-30.4 14.1s-22.8-5.1-30.4-14.1L9.55 281.9c-12.733-15.8-12.733-36.9 0-51.8L193.6 14.06C201.2 5.14 212.3 0 224 0s22.9 5.14 30.4 14.06l184 216.04z" />
  </svg>
);

const SvgRhombusSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgRhombusSolid;
