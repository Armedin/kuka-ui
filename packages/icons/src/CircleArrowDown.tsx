import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M340.7 260.7 272 329.4V144c0-8.8-7.2-16-16-16s-16 7.2-16 16v185.4l-68.7-68.7c-6.25-6.25-16.38-6.25-22.62 0s-6.25 16.38 0 22.62l96 96C247.8 382.4 251.9 384 256 384s8.188-1.562 11.31-4.688l96-96c6.25-6.25 6.25-16.38 0-22.62s-16.41-6.292-22.61.008zM256 0C114.6 0 0 114.6 0 256s114.6 256 256 256 256-114.6 256-256S397.4 0 256 0zm0 480C132.5 480 32 379.5 32 256S132.5 32 256 32s224 100.5 224 224-100.5 224-224 224z" />
  </svg>
);

const SvgCircleArrowDown = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgCircleArrowDown;
