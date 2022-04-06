import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M0 96c0-35.35 28.65-64 64-64h384c35.3 0 64 28.65 64 64v320c0 35.3-28.7 64-64 64H64c-35.35 0-64-28.7-64-64V96zm294.2 71.9c-8.9 9.9-8.1 24.2 1.7 33.9l60.2 54.2-60.2 54.2c-9.8 8.8-10.6 24-1.7 33.9 8.8 9.8 24 10.6 33.9 1.7l80-72c5-4.5 7.9-11 7.9-17.8 0-6.8-2.9-13.3-7.9-17.8l-80-72c-9.9-8.9-25.1-8.1-33.9 1.7zm-78.1 33.9c9.8-9.7 10.6-24 1.7-33.9-9.7-9.8-24-10.6-33.9-1.7l-80 72c-5.01 4.5-7.9 11-7.9 17.8 0 6.8 2.89 13.3 7.9 17.8l80 72c9.9 8.9 24.2 8.1 33.9-1.7 8.9-9.9 8.1-25.1-1.7-33.9L155.9 256l60.2-54.2z" />
  </svg>
);

const SvgRectangleCodeSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgRectangleCodeSolid;
