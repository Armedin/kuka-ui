import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
    <path d="M384 32H64C28.65 32 0 60.66 0 96v320c0 35.34 28.65 64 64 64h320c35.35 0 64-28.66 64-64V96c0-35.34-28.7-64-64-64zm-73.4 246.6-112 112c-12.5 12.5-32.75 12.5-45.25 0s-12.5-32.75 0-45.25L242.8 256l-89.4-89.4c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l112 112C316.9 239.6 320 247.8 320 256s-3.1 16.4-9.4 22.6z" />
  </svg>
);

const SvgSquareChevronRightSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgSquareChevronRightSolid;
