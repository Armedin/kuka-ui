import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M256 32C102.9 32 0 115.2 0 192.1c0 34.84 26.67 60.29 64 62.59v178.4C64 459.4 84.63 480 109.1 480h292c26.3 0 46.9-20.6 46.9-46V255.6c37.33-2.293 64-27.75 64-62.59C512 115.2 409.1 32 256 32zm186.7 192c-14.8 0-26.7 11.9-26.7 26.7V434c0 7.7-6.3 14-14.9 14h-292c-6.8 0-13.1-6.3-13.1-14V250.7c0-14.8-11.93-26.7-26.66-26.7C47 224 32 211.5 32 192.1 32 140.3 111.8 64 256 64s224 76.25 224 128.1c0 19.4-15 31.9-37.3 31.9z" />
  </svg>
);

const SvgBreadSlice = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgBreadSlice;
