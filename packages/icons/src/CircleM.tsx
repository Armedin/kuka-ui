import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256 256-114.6 256-256S397.4 0 256 0zm0 480C132.5 480 32 379.5 32 256S132.5 32 256 32s224 100.5 224 224-100.5 224-224 224zm116.8-351.3c-6.609-2.047-13.91.36-17.92 6.094L256 276.1l-98.9-141.3c-4-5.7-11.3-8.2-17.9-6.1-6.7 2.1-11.2 8.3-11.2 15.3v224c0 8.8 7.2 16 16 16s16-7.2 16-16V194.8l82.89 118.4c6 8.562 20.22 8.562 26.22 0L352 194.8V368c0 8.844 7.156 16 16 16s16-7.156 16-16V144c0-7-4.5-13.2-11.2-15.3z" />
  </svg>
);

const SvgCircleM = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgCircleM;
