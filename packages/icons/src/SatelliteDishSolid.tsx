import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M216 104c-13.2 0-24 10.8-24 24s10.75 24 24 24c79.41 0 144 64.59 144 144 0 13.3 10.8 24 24 24s24-10.75 24-24c0-105.9-86.1-192-192-192zm8-104c-17.7 0-32 14.31-32 32s14.33 32 32 32c123.5 0 224 100.5 224 224 0 17.69 14.33 32 32 32s32-14.31 32-32C512 129.2 382.8 0 224 0zm-35.1 346 27.37-27.37c2.625.625 5.059 1.506 7.809 1.506a31.9 31.9 0 0 0 31.99-32c0-17.62-14.24-32.01-31.99-32.01-17.62 0-31.99 14.38-31.99 32.01 0 2.875.81 5.25 1.56 7.875L166.2 323.4 49.37 206.5c-7.25-7.25-20.12-6-24.1 3-41.75 77.88-29.88 176.7 35.75 242.4 65.62 65.62 164.6 77.5 242.4 35.75 9.125-5 10.38-17.75 3-25L188.9 346z" />
  </svg>
);

const SvgSatelliteDishSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgSatelliteDishSolid;
