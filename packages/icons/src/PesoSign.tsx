import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" {...props}>
    <path d="M192 32c65.6 0 121.1 39.49 146.7 96H368c8.8 0 16 7.2 16 16s-7.2 16-16 16h-19.2c2.1 10.3 3.2 21 3.2 32 0 10.1-1.1 21.7-3.2 32H368c8.8 0 16 7.2 16 16s-7.2 16-16 16h-29.3c-25.6 56.5-81.1 96-146.7 96H64v112c0 8.8-7.16 16-16 16s-16-7.2-16-16V256H16c-8.836 0-16-7.2-16-16s7.164-16 16-16h16v-64H16c-8.836 0-16-7.2-16-16s7.164-16 16-16h16V71.35C32 49.62 49.62 32 71.35 32H192zm110.9 96C280.7 89.74 239.4 64 192 64H71.35A7.35 7.35 0 0 0 64 71.35V128h238.9zM64 160v64h251.1c3.5-10.2 4.9-21 4.9-32 0-11.9-1.4-21.8-4.9-32H64zm238.9 96H64v64h128c47.4 0 88.7-25.7 110.9-64z" />
  </svg>
);

const SvgPesoSign = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgPesoSign;
