import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
    <path d="M123.3 299.3 224 198.6l100.7 100.7c6.25 6.25 16.38 6.25 22.62 0s6.25-16.38 0-22.62l-112-112C232.2 161.6 228.1 160 224 160s-8.2 1.6-11.3 4.7l-112 112c-6.25 6.25-6.25 16.38 0 22.62s16.4 6.28 22.6-.02zM64 480h320c35.35 0 64-28.65 64-64V96c0-35.35-28.65-64-64-64H64C28.65 32 0 60.65 0 96v320c0 35.3 28.65 64 64 64zM32 96c0-17.64 14.36-32 32-32h320c17.64 0 32 14.36 32 32v320c0 17.64-14.36 32-32 32H64c-17.64 0-32-14.36-32-32V96z" />
  </svg>
);

const SvgSquareChevronUp = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgSquareChevronUp;
