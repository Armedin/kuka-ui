import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
    <path d="M251.3 148.7c-6.25-6.25-16.38-6.25-22.62 0s-6.25 16.38 0 22.62L297.4 240H112c-8.8 0-16 7.2-16 15.1 0 9.7 7.2 16.9 16 16.9h185.4l-68.69 68.69c-6.25 6.25-6.25 16.38 0 22.62s16.38 6.25 22.62 0l96-96c3.07-3.11 4.67-7.21 4.67-12.21s-1.562-8.184-4.688-11.31L251.3 148.7zM384 32H64C28.65 32 0 60.65 0 96v320c0 35.35 28.65 64 64 64h320c35.35 0 64-28.65 64-64V96c0-35.35-28.7-64-64-64zm32 384c0 17.64-14.36 32-32 32H64c-17.64 0-32-14.36-32-32V96c0-17.64 14.36-32 32-32h320c17.64 0 32 14.36 32 32v320z" />
  </svg>
);

const SvgSquareArrowRight = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgSquareArrowRight;
