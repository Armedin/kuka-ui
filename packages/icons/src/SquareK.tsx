import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
    <path d="M384 32H64C28.65 32 0 60.65 0 96v320c0 35.35 28.65 64 64 64h320c35.35 0 64-28.65 64-64V96c0-35.35-28.7-64-64-64zm32 384c0 17.64-14.36 32-32 32H64c-17.64 0-32-14.36-32-32V96c0-17.64 14.36-32 32-32h320c17.64 0 32 14.36 32 32v320zM315.9 133.3c-5.922-6.609-16.05-7.094-22.59-1.188L160 252.1V144c0-8.8-7.2-16-16-16s-16 7.2-16 16v224c0 8.8 7.2 16 16 16s16-7.2 16-16v-72.9l41.4-37.26 89.8 119.7c3.1 4.26 7.9 6.46 12.8 6.46 3.344 0 6.703-1.047 9.578-3.203 7.078-5.297 8.516-15.33 3.203-22.39L225.3 236.4l89.43-80.49c6.57-6.81 7.07-16.01 1.17-22.61z" />
  </svg>
);

const SvgSquareK = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgSquareK;
