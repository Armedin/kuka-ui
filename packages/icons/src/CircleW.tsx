import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256 256-114.6 256-256S397.4 0 256 0zm0 480C132.5 480 32 379.5 32 256S132.5 32 256 32s224 100.5 224 224-100.5 224-224 224zm132.4-335.4c-8.4-2.5-17.4 2.5-19.8 11L320 325.8l-48.61-170.2c-3.938-13.69-26.84-13.69-30.78 0L192 325.8l-48.6-170.2c-3.3-8.5-11.4-13.5-19.8-11-8.5 2.406-13.42 11.28-11 19.78l64 224c3.938 13.69 26.84 13.69 30.78 0L256 218.3l48.61 170.2c1.99 6.8 8.19 11.5 15.29 11.5s13.48-4.75 15.45-11.59l64-224c2.45-8.51-2.45-17.41-10.95-19.81z" />
  </svg>
);

const SvgCircleW = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgCircleW;
