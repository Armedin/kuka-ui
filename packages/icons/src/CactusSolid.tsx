import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M464 224c-26.5 0-48 21.5-48 47.1v63.1c0 8.875-7.125 15.1-16 15.1h-48V101.4C352 50.3 313.12 2.9 261.12.2c-26.25-1.375-51.1 8.126-71.13 26.25C170.9 44.51 160 69.63 160 96v127.1l-48 .9c-8.875 0-16-7.125-16-15.1V144c0-26.5-21.5-47.1-48-47.1S0 117.5 0 144v63.1c0 61.87 50.12 111.1 112 111.1h48v159.1c0 20.3 14.4 34.7 32 34.7h128c17.62 0 32-14.37 32-31.1v-31.1h48c61.88 0 112-50.12 112-111.1V272c0-26.5-21.5-48-48-48zm-240-48c-8.875 0-16-7.125-16-15.1s7.1-16.9 16-16.9 16 7.1 16 16-7.1 16-16 16zm64 224c-8.875 0-16-7.125-16-15.1 0-8.875 7.125-15.1 16-15.1s16 7.125 16 15.1c0 8-7.1 15.1-16 15.1z" />
  </svg>
);

const SvgCactusSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgCactusSolid;
