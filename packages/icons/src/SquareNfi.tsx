import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
    <path d="M75.73 160.6c6.93-1.9 14.29 1 17.99 7.2l65.38 110.4V176c0-8.8 8.1-16 16-16 9.7 0 16 7.2 16 16v160c0 7.2-3.9 13.5-10.8 15.4-7 1.9-15.2-1-18-7.2L96 233.8V336c0 8.8-7.16 16-16 16s-16-7.2-16-16V176c0-7.2 4.8-13.5 11.73-15.4zM224 176c0-8.8 7.2-16 16-16h64c8.8 0 16 7.2 16 16s-7.2 16-16 16h-48v32h48c8.8 0 16 7.2 16 16s-7.2 16-16 16h-48v80c0 8.8-7.2 16-16 16s-16-7.2-16-16V176zm160 160c0 8.8-7.2 16-16 16s-16-7.2-16-16V176c0-8.8 7.2-16 16-16s16 7.2 16 16v160zm0-304c35.3 0 64 28.65 64 64v320c0 35.3-28.7 64-64 64H64c-35.35 0-64-28.7-64-64V96c0-35.35 28.65-64 64-64h320zm0 32H64c-17.67 0-32 14.33-32 32v320c0 17.7 14.33 32 32 32h320c17.7 0 32-14.3 32-32V96c0-17.67-14.3-32-32-32z" />
  </svg>
);

const SvgSquareNfi = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgSquareNfi;
