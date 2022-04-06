import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256 256-114.6 256-256S397.4 0 256 0zm106.3 344.5c8.562 10.11 7.297 25.27-2.828 33.83A23.972 23.972 0 0 1 344 384c-6.812 0-13.59-2.891-18.34-8.5L256 293.2l-69.7 82.3c-4.7 5.6-11.5 8.5-19.2 8.5-4.6 0-10.1-1.9-14.6-5.7-10.12-8.562-11.39-23.72-2.828-33.83L224.6 256l-74.9-88.5c-8.6-10.1-7.3-25.3 2.8-33.8 10.1-8.6 25.3-7.3 33.8 2.8l69.7 82.3 69.67-82.34c8.547-10.12 23.72-11.41 33.83-2.828 10.12 8.562 11.39 23.72 2.828 33.83L287.4 256l74.9 88.5z" />
  </svg>
);

const SvgCircleXSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgCircleXSolid;
