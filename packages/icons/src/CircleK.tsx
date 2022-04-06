import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256 256-114.6 256-256S397.4 0 256 0zm0 480C132.5 480 32 379.5 32 256S132.5 32 256 32s224 100.5 224 224-100.5 224-224 224zm91.9-346.7c-5.922-6.609-16.05-7.094-22.59-1.188L192 252.1V144c0-8.8-7.2-16-16-16s-16 7.2-16 16v224c0 8.8 7.2 16 16 16s16-7.2 16-16v-72.9l41.4-37.26 89.8 119.7c3.1 4.26 7.9 6.46 12.8 6.46 3.344 0 6.703-1.047 9.578-3.203 7.078-5.297 8.516-15.33 3.203-22.39L257.3 236.4l89.43-80.49c6.57-6.81 7.07-16.01 1.17-22.61z" />
  </svg>
);

const SvgCircleK = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgCircleK;
