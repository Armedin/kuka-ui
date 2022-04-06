import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
    <path d="M267.3 356.7 166.6 256l100.7-100.7c6.25-6.25 6.25-16.38 0-22.62s-16.38-6.25-22.62 0l-112 112C129.6 247.8 128 251.9 128 256s1.562 8.188 4.688 11.31l112 112c6.25 6.25 16.38 6.25 22.62 0s6.292-16.41-.008-22.61zM448 416V96c0-35.35-28.65-64-64-64H64C28.65 32 0 60.65 0 96v320c0 35.35 28.65 64 64 64h320c35.3 0 64-28.7 64-64zM64 448c-17.64 0-32-14.36-32-32V96c0-17.64 14.36-32 32-32h320c17.64 0 32 14.36 32 32v320c0 17.64-14.36 32-32 32H64z" />
  </svg>
);

const SvgSquareChevronLeft = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgSquareChevronLeft;