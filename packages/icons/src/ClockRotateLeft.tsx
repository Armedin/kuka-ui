import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M256 0c141.4 0 256 114.6 256 256S397.4 512 256 512c-83.8 0-158.13-40.2-204.81-102.4-5.31-7.1-3.88-17.1 3.18-22.4 7.07-5.3 17.1-3.9 22.41 3.2C117.7 444.8 182.7 480 256 480c123.7 0 224-100.3 224-224S379.7 32 256 32C166.7 32 89.51 84.3 53.55 160H144c8.8 0 16 7.2 16 16s-7.2 16-16 16H16c-8.836 0-16-7.2-16-16V48c0-8.84 7.164-16 16-16 8.84 0 16 7.16 16 16v83.1C75.66 53.29 159.6 0 256 0zm0 128c8.8 0 16 7.2 16 16v105.4l75.3 75.3c6.3 6.2 6.3 16.4 0 22.6-6.2 6.3-16.4 6.3-22.6 0l-80-80c-3-3-5.6-7.1-5.6-11.3V144c0-8.8 8.1-16 16-16h.9z" />
  </svg>
);

const SvgClockRotateLeft = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgClockRotateLeft;
