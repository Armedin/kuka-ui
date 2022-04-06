import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
    <path d="M384 32H64C28.65 32 0 60.65 0 96v320c0 35.35 28.65 64 64 64h320c35.35 0 64-28.65 64-64V96c0-35.35-28.7-64-64-64zm-53.7 312.5c8.562 10.11 7.297 25.27-2.828 33.83A23.972 23.972 0 0 1 312 384c-6.812 0-13.59-2.891-18.34-8.5L224 293.2l-69.7 82.3c-4.7 5.6-11.5 8.5-19.2 8.5-4.6 0-10.1-1.9-14.6-5.7-10.12-8.562-11.39-23.72-2.828-33.83L192.6 256l-74.9-88.5c-8.6-10.1-7.3-25.3 2.8-33.8 10.1-8.6 25.3-7.3 33.8 2.8l69.7 82.3 69.67-82.34c8.547-10.12 23.72-11.41 33.83-2.828 10.12 8.562 11.39 23.72 2.828 33.83L255.4 256l74.9 88.5z" />
  </svg>
);

const SvgSquareXSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgSquareXSolid;
