import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" {...props}>
    <path d="M240 32c79.5 0 144 64.47 144 144 0 79.5-64.5 144-144 144H96v64h208c8.8 0 16 7.2 16 16s-7.2 16-16 16H96v48c0 8.8-7.16 16-16 16s-16-7.2-16-16v-48H16c-8.836 0-16-7.2-16-16s7.164-16 16-16h48v-64H16c-8.836 0-16-7.2-16-16s7.164-16 16-16h48V72.69C64 50.22 82.22 32 104.7 32H240zM96 288h144c61.9 0 112-50.1 112-112S301.9 64 240 64H104.7c-4.81 0-8.7 3.89-8.7 8.69V288z" />
  </svg>
);

const SvgRubleSign = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgRubleSign;
