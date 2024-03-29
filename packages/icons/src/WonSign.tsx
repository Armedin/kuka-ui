import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M96.74 256h86.66l57.2-212.16C242.4 36.85 248.8 32 256 32c7.2 0 13.6 4.86 15.4 11.84L328.6 256h86.7l65.4-212.7c2.6-8.45 11.6-13.19 20-10.59 8.5 2.6 13.2 11.55 10.6 20L448.7 256H496c8.8 0 16 7.2 16 16s-7.2 16-16 16h-57.1l-55.6 180.7c-2.1 6.8-8.5 11.4-15.6 10.4-7.1.8-13.3-4.1-15.1-10.9L304 288h-96.9l-47.6 180.2c-1.9 6.8-8.1 11.7-15.2 10.9-7.1 1-13.5-3.6-15.6-10.4L73.11 288H16c-8.836 0-16-7.2-16-16s7.164-16 16-16h47.26L.708 52.71c-2.599-8.45 2.141-17.4 10.592-20 8.44-2.6 17.39 2.14 19.99 10.59L96.74 256zm9.86 32 35.5 118.3L174.8 288h-68.2zm110-32h78.8L256 109.5 216.6 256zm120.6 32L369 406.3 405.4 288h-68.2z" />
  </svg>
);

const SvgWonSign = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgWonSign;
