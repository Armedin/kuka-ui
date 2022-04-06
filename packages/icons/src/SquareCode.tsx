import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
    <path d="m283.1 173.4 64 72c6.2 6 6.2 15.2 0 21.2l-64 72c-5 6.6-16 7.2-21.7.5-6.6-5-7.2-16-1.4-21.7l54.6-62.3-54.6-60.5c-5.8-6.6-5.2-16.7 1.4-22.6 5.7-5.8 16.7-5.2 21.7 1.4zM133.4 256l53.7 61.4c6.7 5.7 6.1 16.7-.5 21.7-6.6 6.7-16.7 6.1-22.6-.5l-64-72c-5.35-6-5.35-15.2 0-21.2l64-72c5.9-6.6 16-7.2 22.6-1.4 6.6 5.9 7.2 16 .5 22.6L133.4 256zM384 32c35.3 0 64 28.65 64 64v320c0 35.3-28.7 64-64 64H64c-35.35 0-64-28.7-64-64V96c0-35.35 28.65-64 64-64h320zm0 32H64c-17.67 0-32 14.33-32 32v320c0 17.7 14.33 32 32 32h320c17.7 0 32-14.3 32-32V96c0-17.67-14.3-32-32-32z" />
  </svg>
);

const SvgSquareCode = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgSquareCode;
