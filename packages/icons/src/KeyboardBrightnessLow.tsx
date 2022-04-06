import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M232 160c0-13.3 10.7-24 24-24s24 10.7 24 24-10.7 24-24 24-24-10.7-24-24zm136 224c8.8 0 16 7.2 16 16s-7.2 16-16 16H144c-8.8 0-16-7.2-16-16s7.2-16 16-16h224zM120 224c0 13.3-10.7 24-24 24-13.25 0-24-10.7-24-24s10.75-24 24-24c13.3 0 24 10.7 24 24zm272 0c0-13.3 10.7-24 24-24s24 10.7 24 24-10.7 24-24 24-24-10.7-24-24zm112 160c0 13.3-10.7 24-24 24s-24-10.7-24-24 10.7-24 24-24 24 10.7 24 24zM8 384c0-13.3 10.75-24 24-24s24 10.7 24 24-10.75 24-24 24-24-10.7-24-24z" />
  </svg>
);

const SvgKeyboardBrightnessLow = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgKeyboardBrightnessLow;
