import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" {...props}>
    <path d="M48.66 79.13C128.4 100.9 208.2 80.59 288 60.25c87-22.17 174-44.35 261-11.87 16.9 6.31 27 23.24 27 41.28V399.5c0 23.9-25.6 39.7-48.7 33.4-79.7-21.8-159.5-1.5-239.3 18.8-87.9 22.2-174.9 44.4-261.03 11.9C10.06 457.3 0 440.4 0 422.3V112.5c0-23.91 25.61-39.67 48.66-33.37zM287.1 352c45.1 0 80.9-43 80.9-96.9 0-53-35.8-96-80.9-96-43.3 0-80 43-80 96 0 53.9 36.7 96.9 80 96.9z" />
  </svg>
);

const SvgMoneyBillSimpleWaveSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgMoneyBillSimpleWaveSolid;
