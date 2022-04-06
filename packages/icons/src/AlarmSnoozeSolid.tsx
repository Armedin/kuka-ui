import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="m160 25.4-145.14 121C5.452 131.6 0 114.1 0 95.24 0 42.64 42.64 0 95.24 0 120.2 0 143 9.638 160 25.4zm-38.1 442-35.27 35.2c-12.5 12.5-32.76 12.5-45.26 0-12.49-12.5-12.49-32.7 0-45.2l35.23-35.2C48.59 384.8 32 338.3 32 288 32 164.3 132.3 64 256 64s224 100.3 224 224c0 50.3-16.6 96.8-44.6 134.2l35.2 35.2c12.5 12.5 12.5 32.7 0 45.2s-32.7 12.5-45.2 0l-35.2-35.2c-37.4 28-83.9 44.6-134.2 44.6-50.3 0-96.8-16.6-134.1-44.6zM200 192c-13.3 0-24 10.7-24 24s10.7 24 24 24h62.9l-81.8 105.3c-5.7 7.2-6.7 17-2.7 25.2 4.1 8.3 12.4 13.5 21.6 13.5h112c13.3 0 24-10.7 24-24s-10.7-24-24-24h-62.9l81.8-105.3c5.7-7.2 6.7-17 2.7-25.2-4.1-8.3-12.4-13.5-21.6-13.5H200zm297.1-45.6L352 25.4C368.1 9.638 391.8 0 416.8 0 469.4 0 512 42.64 512 95.24c0 18.76-5.5 36.36-14.9 51.16z" />
  </svg>
);

const SvgAlarmSnoozeSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgAlarmSnoozeSolid;
