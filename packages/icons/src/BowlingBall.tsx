import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M239.1 184c-13.25 0-24 10.74-24 24 0 13.25 10.75 24 24 24 13.26 0 24-10.75 24-24 0-13.3-9.9-24-24-24zm0-96c-13.25 0-24 10.74-24 24 0 13.25 10.75 24 24 24 13.26 0 24-10.75 24-24 0-13.26-9.9-24-24-24zm-96 64c-13.25 0-24 10.74-24 24 0 13.25 10.75 24 24 24 13.26 0 24-10.75 24-24 0-13.3-9.9-24-24-24zM256 0C114.6 0 0 114.6 0 256s114.6 256 256 256 256-114.6 256-256S397.4 0 256 0zm0 480C132.5 480 32 379.5 32 256S132.5 32 256 32s224 100.5 224 224-100.5 224-224 224z" />
  </svg>
);

const SvgBowlingBall = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgBowlingBall;
