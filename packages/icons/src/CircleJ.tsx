import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256 256-114.6 256-256S397.4 0 256 0zm0 480C132.5 480 32 379.5 32 256S132.5 32 256 32s224 100.5 224 224-100.5 224-224 224zm64-352c-8.844 0-16 7.156-16 16v149.3c0 32.4-28.7 58.7-64 58.7s-64-26.31-64-58.67V272c0-8.8-7.2-16-16-16s-16 7.2-16 16v21.33c0 49.97 43.1 90.67 96 90.67s96-40.67 96-90.67V144c0-8.8-7.2-16-16-16z" />
  </svg>
);

const SvgCircleJ = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgCircleJ;
