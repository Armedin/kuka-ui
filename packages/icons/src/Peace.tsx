import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256 256-114.6 256-256S397.4 0 256 0zm224 256c0 47.13-14.71 90.84-39.67 126.1L272 248.3V32.81C388 41.07 480 137.9 480 256zM240 32.81v215.5L71.7 383.01C46.71 346.8 32 303.1 32 256c0-118.1 91.1-214.93 208-223.19zM91.81 407.9 240 289.3v189.9c-58.4-4.2-110.7-30.8-148.19-71.3zM272 479.2V289.3l148.2 118.6c-37.5 40.5-89.8 67.1-148.2 71.3z" />
  </svg>
);

const SvgPeace = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgPeace;
