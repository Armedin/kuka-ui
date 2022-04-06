import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
    <path d="M384 32H64C28.65 32 0 60.66 0 96v320c0 35.34 28.65 64 64 64h320c35.35 0 64-28.66 64-64V96c0-35.34-28.7-64-64-64zm32 384c0 17.64-14.36 32-32 32H64c-17.64 0-32-14.36-32-32V96c0-17.64 14.36-32 32-32h320c17.64 0 32 14.36 32 32v320zM182.9 192.3l89.1-.3c8.9-.9 16-7.2 16-16.9-.9-8-7.2-15.1-16-15.1l-128.9.4c-8 0-15.1 7.2-15.1 16V304c0 8.8 7.2 16 16 16s16-7.2 16-16v-89.4l132.7 132.7c3.1 3.1 7.2 4.7 11.3 4.7s8.188-1.562 11.31-4.688c6.25-6.25 6.25-16.38 0-22.62L182.9 192.3z" />
  </svg>
);

const SvgSquareArrowUpLeft = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgSquareArrowUpLeft;
