import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512" {...props}>
    <path d="m207.1 194.8 48.23 168.8c2.97 10.2-4.73 20.4-16.23 20.4h-47.99l.89 96c0 17.67-14.33 32-32 32H96c-17.67 0-32-14.33-32-32v-96H16.01C5.38 384-2.29 373.83.63 363.6l48.23-168.8C54.74 174.2 73.57 160 95 160h65.99c21.41 0 40.31 14.2 46.11 34.8zM128 128c35.38 0 64-28.62 64-64S163.4 0 128 0 63.1 28.62 63.1 64s29.53 64 64.9 64z" />
  </svg>
);

const SvgPersonDressSimpleSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgPersonDressSimpleSolid;
