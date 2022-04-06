import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
    <path d="M384 32H64C28.65 32 0 60.65 0 96v320c0 35.35 28.65 64 64 64h320c35.35 0 64-28.65 64-64V96c0-35.35-28.7-64-64-64zm32 384c0 17.64-14.36 32-32 32H64c-17.64 0-32-14.36-32-32V96c0-17.64 14.36-32 32-32h320c17.64 0 32 14.36 32 32v320zM235.3 132.7c-3.1-3.1-7.2-4.7-12.2-4.7s-7.3 1.6-10.4 4.7l-96 96c-6.25 6.25-6.25 16.38 0 22.62s16.38 6.25 22.62 0L208 182.6V368c0 8.844 7.154 16 15.1 16s16.9-7.2 16.9-16V182.6l68.69 68.69c6.25 6.25 16.38 6.25 22.62 0s6.25-16.38 0-22.62L235.3 132.7z" />
  </svg>
);

const SvgSquareArrowUp = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgSquareArrowUp;
