import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
    <path d="M384 32H64C28.65 32 0 60.65 0 96v320c0 35.35 28.65 64 64 64h320c35.35 0 64-28.65 64-64V96c0-35.35-28.7-64-64-64zm32 384c0 17.64-14.36 32-32 32H64c-17.64 0-32-14.36-32-32V96c0-17.64 14.36-32 32-32h320c17.64 0 32 14.36 32 32v320zM308.7 260.7 240 329.4V144c0-8.844-7.154-16-15.1-16s-16.9 7.2-16.9 16v185.4l-68.7-68.7c-6.25-6.25-16.38-6.25-22.62 0s-6.25 16.38 0 22.62l96 96C215.8 382.4 219.9 384 224 384s8.184-1.562 11.31-4.688l96-96c6.25-6.25 6.25-16.38 0-22.62s-16.41-6.292-22.61.008z" />
  </svg>
);

const SvgSquareArrowDown = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgSquareArrowDown;
