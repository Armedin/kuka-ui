import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" {...props}>
    <path d="M319.1 352c-35.35 0-64 28.65-64 63.1s28.65 64 64 64 64-28.65 64-64-27.8-63.1-64-63.1zm.9 96c-17.64 0-32-14.36-32-32s14.4-32 32-32 32 14.36 32 32-14.4 32-32 32z" />
  </svg>
);

const SvgWifiWeak = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgWifiWeak;
