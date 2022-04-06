import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" {...props}>
    <path d="m74.13 32.8 7.62-11.42A47.943 47.943 0 0 1 121.7.001h396.6c16.1 0 31 8.021 39.9 21.379l75.6 113.32c4 6.1 6.2 13.2 6.2 20.5 0 20.3-16.5 36.8-36.8 36.8H277.3l42.7 33.5V224h64v51.7l128 99.4V224h64v202.2l54.8 42.9c10.4 8.2 12.3 23.3 4.1 33.7-8.2 10.4-23.3 12.3-33.7 4.1L9.196 42.89C-1.236 34.71-3.065 19.63 5.112 9.196 13.29-1.236 28.37-3.065 38.81 5.112L74.13 32.8zM0 155.2c0-7.3 2.153-14.4 6.188-20.5l14.792-22.2L121.8 192H36.84C16.5 192 0 175.5 0 155.2zM320 384v-35.9l64 50.4V464c0 26.5-21.5 48-48 48H112c-26.51 0-48-21.5-48-48V224h64v160h192z" />
  </svg>
);

const SvgShopSlashSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgShopSlashSolid;
