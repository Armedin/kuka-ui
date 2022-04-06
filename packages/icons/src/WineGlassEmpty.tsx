import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" {...props}>
    <path d="M303.4 192.6 288.74 29.1C287.3 12.62 273.7 0 257.3 0H62.66C46.35 0 32.73 12.62 31.25 29.1L16.6 192.6C9.436 272.56 67.32 341.1 144 349.8V480H79.1c-8.836 0-16 7.162-16 16 0 8.836 7.164 16 16 16h160c8.836 0 16-7.164 16-16 0-8.838-7.164-16-16-16h-64V349.8c77.6-8.7 135.5-77.2 128.3-157.2zm-254.93 2.9L62.66 32h194.2l14.65 163.5c2.809 31.34-6.881 61.58-27.28 85.14-20.1 23.22-47.92 36.91-78.32 38.56-7.273.393-4.458.4-11.84 0-30.37-1.6-58.21-15.3-78.31-38.5-20.41-23.6-30.1-53.8-27.29-85.2z" />
  </svg>
);

const SvgWineGlassEmpty = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgWineGlassEmpty;
