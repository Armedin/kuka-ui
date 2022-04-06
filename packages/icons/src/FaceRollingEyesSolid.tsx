import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M0 256C0 114.6 114.6 0 256 0s256 114.6 256 256-114.6 256-256 256S0 397.4 0 256zm192 112c-8.8 0-16 7.2-16 16s7.2 16 16 16h128c8.8 0 16-7.2 16-16s-7.2-16-16-16H192zm-5.8-202.4c3.6 5.2 5.8 11.5 5.8 18.4 0 17.7-14.3 32-32 32s-32-14.3-32-32c0-6.9 2.2-13.2 5.8-18.4-22.3 10-37.8 31.5-37.8 58.4 0 35.3 28.7 64 64 64s64-28.7 64-64c0-26.9-15.5-48.4-37.8-58.4zM352 288c35.3 0 64-28.7 64-64 0-26.9-15.5-48.4-37.8-58.4 3.6 5.2 5.8 11.5 5.8 18.4 0 17.7-14.3 32-32 32s-32-14.3-32-32c0-6.9 2.2-13.2 5.8-18.4-22.3 10-37.8 31.5-37.8 58.4 0 35.3 28.7 64 64 64z" />
  </svg>
);

const SvgFaceRollingEyesSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgFaceRollingEyesSolid;
