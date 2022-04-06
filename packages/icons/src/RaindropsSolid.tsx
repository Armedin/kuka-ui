import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
    <path d="M50.56 231.9C31.79 263.4 0 320.6 0 347.4 0 385.3 28.65 416 64 416s64-30.73 64-68.64c0-26.72-31.79-83.96-50.56-115.4-6.3-10.56-20.58-10.56-26.88-.06zM224 155.4c0-26.72-31.79-83.96-50.56-115.4-6.307-10.57-20.58-10.57-26.89 0C127.8 71.4 96 128.6 96 155.4c0 37.9 28.7 68.6 64 68.6s64-30.7 64-68.6zm110.6-19.9c-6.916-10.01-22.27-10.01-29.19 0C271.8 184.1 192 305.2 192 358.3c0 67.2 57.3 121.7 128 121.7s128-54.5 128-121.7c0-53.1-79.8-174.2-113.4-222.8z" />
  </svg>
);

const SvgRaindropsSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgRaindropsSolid;
