import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" {...props}>
    <path d="M112 160c-8.8 0-16-7.2-16-16 0-44.18 35.8-80 80-80 8.8 0 16 7.16 16 16s-7.2 16-16 16c-26.5 0-48 21.5-48 48 0 8.8-7.2 16-16 16zm208-16c0 74.1-56 135.2-128 143.1V496c0 8.8-7.2 16-16 16s-16-7.2-16-16V287.1c-72-7.9-128-69-128-143.1C32 64.47 96.47 0 176 0c79.5 0 144 64.47 144 144zM176 256c61.9 0 112-50.1 112-112 0-61.86-50.1-112-112-112S64 82.14 64 144c0 61.9 50.1 112 112 112z" />
  </svg>
);

const SvgMapPin = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgMapPin;
