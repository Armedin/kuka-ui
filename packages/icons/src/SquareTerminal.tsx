import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
    <path d="m106.4 147.9 112 96c2.7 3 5.6 7.4 5.6 12.1 0 4.7-2.9 9.1-5.6 12.1l-112 96c-6.7 5.8-16.8 5-22.55-1.7s-4.97-16.8 1.74-22.5L183.4 256l-97.81-83.9c-6.71-5.7-7.49-15.8-1.74-22.5 5.75-6.7 15.85-7.5 22.55-1.7zM368 352c8.8 0 16 7.2 16 16s-7.2 16-16 16H208c-8.8 0-16-7.2-16-16s7.2-16 16-16h160zm16-320c35.3 0 64 28.65 64 64v320c0 35.3-28.7 64-64 64H64c-35.35 0-64-28.7-64-64V96c0-35.35 28.65-64 64-64h320zm0 32H64c-17.67 0-32 14.33-32 32v320c0 17.7 14.33 32 32 32h320c17.7 0 32-14.3 32-32V96c0-17.67-14.3-32-32-32z" />
  </svg>
);

const SvgSquareTerminal = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgSquareTerminal;
