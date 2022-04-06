import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M232 325.3V352c0 17.7-14.3 32-32 32s-32-14.3-32-32v-90.7l64 64zM0 256C0 114.6 114.6 0 256 0s256 114.6 256 256-114.6 256-256 256S0 397.4 0 256zm412.5 111.2C434.9 335.9 448 297.5 448 256c0-106.9-86-192-192-192-41.5 0-79.9 13.15-111.2 35.5l37.7 37.7c6.9-5.7 15.8-9.2 25.5-9.2h72c53 0 96 42.1 96 96 0 29.2-13.1 55.4-33.7 73l70.2 70.2zm-313-222.4C77.15 176.1 64 214.5 64 256c0 106 85.1 192 192 192 41.5 0 79.9-13.1 111.2-35.5L99.5 144.8zm197.1 106.6c9.2-5.7 15.4-15.8 15.4-27.4 0-17.7-14.3-32-32-32h-42.7l59.3 59.4z" />
  </svg>
);

const SvgBanParkingSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgBanParkingSolid;
