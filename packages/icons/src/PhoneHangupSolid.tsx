import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" {...props}>
    <path d="m635.4 293.6-52.73 84.25c-7.631 12.2-23.09 17.35-36.63 11.98l-105.4-42.1c-12.45-4.925-20.14-17.65-18.71-30.87l6.64-66.46c-70.27-23.9-146.77-23.9-216.97 0l6.621 66.51c1.338 13.27-6.28 25.86-18.67 30.85l-105.5 42.13c-13.6 5.307-29.04.244-36.72-12.04l-52.71-84.22C-2.861 281.8-1.118 266.5 8.85 256.5 180.4 85.16 459.6 85.17 631.1 256.5c10 10 11.8 25.3 4.3 37.1z" />
  </svg>
);

const SvgPhoneHangupSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgPhoneHangupSolid;
