import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" {...props}>
    <path d="M640 240v32c0 8.875-7.125 15.1-16 15.1H499.8l-55.13 110.2c-5.875 11.87-18.63 18.75-31.75 17.62-13.25-1.375-24.25-10.62-27.75-23.5L323.8 167.3l-68.6 319.5c-3 14.2-15.4 24.7-30.1 25.2H224c-14.25 0-26.88-9.5-30.75-23.25L135.9 288H16c-8.875 0-16-7.125-16-15.1V240c0-8.875 7.125-15.1 16-15.1h144c14.25 0 26.88 9.503 30.75 23.25l28.75 100.7 69.3-323.58C291.8 10.9 304.42.4 319.17.02c14.75-.5 27.88 9.375 31.75 23.62l74 271.1 26.5-52.1C456.8 230.9 467.9 224 480 224h144c8.9 0 16 7.1 16 16z" />
  </svg>
);

const SvgWavePulseSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgWavePulseSolid;
