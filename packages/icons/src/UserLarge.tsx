import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M256 288c79.53 0 144-64.47 144-144S335.53 0 256 0c-79.52 0-144 64.47-144 144s64.5 144 144 144zm0-256c61.76 0 112 50.24 112 112 0 61.8-50.2 112-112 112s-112-50.2-112-112c0-61.76 50.2-112 112-112zm95.1 288H160C71.64 320 0 391.63 0 480c0 17.67 14.33 32 31.1 32H480c17.67 0 31.1-14.33 31.1-32 .9-88.4-70.7-160-160-160zM32 480c0-70.58 57.42-128 128-128h191.1c71.5 0 128.9 57.4 128.9 128H32z" />
  </svg>
);

const SvgUserLarge = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgUserLarge;
