import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" {...props}>
    <path d="M154 95.42C187.3 38.35 249.2 0 320 0c106 0 192 85.96 192 192 0 38.7-23 90.8-53 142.5l171.8 134.6c10.4 8.2 12.3 23.3 4.1 33.7-8.2 10.4-23.3 12.3-33.7 4.1L9.196 42.89C-1.236 34.71-3.065 19.63 5.112 9.196 13.29-1.236 28.37-3.065 38.81 5.112L154 95.42zM296.3 499.2c-50.4-63-164-214-168.2-302.3l278.1 219.2c-23.5 33.4-46.3 62.8-62.5 83.1-12.3 15.3-35.1 15.3-47.4 0z" />
  </svg>
);

const SvgLocationPinSlashSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgLocationPinSlashSolid;
