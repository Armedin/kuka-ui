import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" {...props}>
    <path d="M480 223.1c53 0 96-42.1 96-95.1h-63.1C512 75 469 32 416 32s-95.99 43-95.99 96c0 23.12 8.358 44.11 22.11 60.61 6.25 7.5 9.892 16.77 9.892 26.52C352 237.7 333.8 256 311.1 256h-21.72c-31.48 0-80.08-13.2-101.58-36.2-9.999-10.75-27.75-3.628-27.75 10.87 0 84.75 68.62 153.4 153.4 153.4H281.4c-75.99 0-138.6-55.5-150.8-127.1H80.18c-9.13-.97-16.75 6.73-16.13 15.83C72.68 388.7 169.4 480 287.4 480h107.2c55.5 0 110.7-44.48 116.7-99.73 4.5-42.37-14.7-80.37-46.08-102.9-10.75-7.75-17.28-20.26-17.28-33.64 0-7.125 2.003-13.77 5.378-19.77L480 223.1zM416 144c-8.874 0-15.1-7.125-15.1-15.1s7.126-16 16-16 15.1 7.125 15.1 16-7.1 15.1-16 15.1z" />
  </svg>
);

const SvgDuckSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgDuckSolid;
