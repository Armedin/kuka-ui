import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
    <path d="M384 32H64C28.65 32 0 60.65 0 96v320c0 35.35 28.65 64 64 64h320c35.35 0 64-28.65 64-64V96c0-35.35-28.7-64-64-64zm32 384c0 17.64-14.36 32-32 32H64c-17.64 0-32-14.36-32-32V96c0-17.64 14.36-32 32-32h320c17.64 0 32 14.36 32 32v320zm-92.1-282.4L224 250.1l-99.9-116.5c-5.7-6.7-15.8-7.4-22.5-1.8-6.719 5.75-7.5 15.88-1.734 22.56L208 280.6V368c0 8.844 7.156 16 16 16s16-7.156 16-16v-87.4l108.1-126.2c5.766-6.688 4.984-16.81-1.734-22.56-6.666-5.64-16.766-4.94-22.466 1.76z" />
  </svg>
);

const SvgSquareY = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgSquareY;
