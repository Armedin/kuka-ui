import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256 256-114.6 256-256S397.4 0 256 0zm0 480C132.5 480 32 379.5 32 256S132.5 32 256 32s224 100.5 224 224-100.5 224-224 224zm9.4-287.9 48.19-36.14c7.062-5.312 8.5-15.34 3.219-22.41C313.7 130.2 308.8 128 304 128a15.93 15.93 0 0 0-9.594 3.188L204.8 198.4C163.2 229.6 160 277.7 160 288c0 52.94 43.06 96 96 96s96-43.06 96-96c0-49.7-38.1-90.2-86.6-95.9zM256 352c-35.35 0-64-28.65-64-64s28.65-64 64-64 64 28.65 64 64c0 35.3-28.7 64-64 64z" />
  </svg>
);

const SvgCircle6 = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgCircle6;
