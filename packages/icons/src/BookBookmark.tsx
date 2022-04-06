import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
    <path d="M448 368V48c0-26.51-21.5-48-48-48H80C35.82 0 0 35.82 0 80v368c0 35.35 28.66 64 64 64h368c8.844 0 16-7.156 16-16s-7.2-16-16-16h-16v-66.95c18.6-6.65 32-24.25 32-45.05zM320 32v174.7l-54.9-43.2c-2-2.3-5.6-3.5-9.1-3.5s-7.062 1.172-10 3.5l-54 43.2V32h128zm64 448H64c-17.64 0-32-14.36-32-32s14.36-32 32-32h320v64zm16-96H64c-11.71 0-22.55 3.389-32 8.9V80c0-26.51 21.49-48 48-48h80v208c0 6.156 3.531 11.75 9.062 14.42 5.562 2.672 12.09 1.891 16.94-1.922L256 196.5l69.1 56.02c3.8 2.28 7.3 3.48 10.9 3.48 2.344 0 4.719-.516 6.938-1.578C348.5 251.8 352 246.2 352 240V32h48c8.8 0 16 7.16 16 16v320c0 8.8-7.2 16-16 16z" />
  </svg>
);

const SvgBookBookmark = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgBookBookmark;
