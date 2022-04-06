import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M320 128H192c-17.7 0-32 14.4-32 32v208c0 6.156 3.531 11.75 9.062 14.42 5.562 2.672 12.09 1.891 16.94-1.922L256 324.5l69.1 56.02c3.8 2.28 7.3 3.48 10.9 3.48 2.344 0 4.719-.516 6.938-1.578C348.5 379.8 352 374.2 352 368V160c0-17.6-14.3-32-32-32zm0 206.7-54.9-43.2c-2-2.3-5.6-3.5-9.1-3.5s-7.1 1.2-10.9 3.5L192 334.7V160h128v174.7zM256 0C114.6 0 0 114.6 0 256s114.6 256 256 256 256-114.6 256-256S397.4 0 256 0zm0 480C132.5 480 32 379.5 32 256S132.5 32 256 32s224 100.5 224 224-100.5 224-224 224z" />
  </svg>
);

const SvgCircleBookmark = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgCircleBookmark;
