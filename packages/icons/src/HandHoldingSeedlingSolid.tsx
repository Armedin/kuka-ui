import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" {...props}>
    <path d="M479.1 0h-64c-40.75 0-77.52 15.75-105.8 40.75 25.38 32 40.88 72.25 41.5 116C424.8 142 479.1 77.5 479.1 0zm-224 160v96c0 17.6 15.3 32 32 32s32-14.4 32-31.1V160c0-88.37-71.63-160-160-160H95.97c0 88.38 71.63 160 159.13 160zm313.1 176.3c-13.12-17.81-38.14-21.66-55.93-8.469l-119.7 88.17h-120.6c-8.748 0-15.1-7.25-15.1-15.99 0-8.75 7.25-16 15.1-16h78.25c15.1 0 30.75-10.88 33.37-26.62 3.25-20-12.12-37.38-31.62-37.38H191.1c-26.1 0-53.12 9.25-74.12 26.25l-46.5 37.74-55.38-.901c-8.748 0-15.1 7.274-15.1 16.02V496c0 8.8 7.251 16 15.1 16h346.1c22.03 0 43.92-7.188 61.7-20.27L558 392.21c19.5-13.11 23.3-38.11 10.2-55.91z" />
  </svg>
);

const SvgHandHoldingSeedlingSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgHandHoldingSeedlingSolid;
