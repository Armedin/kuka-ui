import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" {...props}>
    <path d="M251.1 207.1c0-11 9-20 20-20h16c11.9 0 20.9 9 20.9 20v68h4c11 0 20 9 20 20 0 11.9-9 20-20 20h-48.9c-11 0-20-8.1-20-20 0-11 9-20 20-20h4v-47.5c-8.2-1.9-16-9.9-16-20.5zM48.66 79.13C128.4 100.9 208.2 80.59 288 60.25c87-22.17 174-44.35 261-11.87 16.9 6.31 27 23.24 27 41.28V399.5c0 23.9-25.6 39.7-48.7 33.4-79.7-21.8-159.5-1.5-239.3 18.8-87.9 22.2-174.9 44.4-261.03 11.9C10.06 457.3 0 440.4 0 422.3V112.5c0-23.91 25.61-39.67 48.66-33.37zM127.1 416c0-35.3-27.75-64-64-64v64h64zm-64-192.9c36.25 0 64-27.8 64-64h-64v64zM512 352v-64.9c-35.3 0-64 29.6-64 64.9h64zm0-256.9h-64c0 36.2 28.7 64 64 64v-64zm-224.9 48c-53 0-96 51-96 112 0 62.8 43 112.9 96 112.9 53.9 0 96.9-50.1 96.9-112.9 0-61-43-112-96.9-112z" />
  </svg>
);

const SvgMoneyBill1WaveSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgMoneyBill1WaveSolid;
