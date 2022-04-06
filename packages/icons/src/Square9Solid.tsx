import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
    <path d="M384 32H64C28.65 32 0 60.65 0 96v320c0 35.35 28.65 64 64 64h320c35.35 0 64-28.65 64-64V96c0-35.35-28.7-64-64-64zM279.7 308.4l-79.94 69.69C195.2 382.1 189.6 384 184 384c-6.688 0-13.34-2.781-18.09-8.219-8.719-10-7.656-25.16 2.312-33.88l29.76-25.94C157.7 304.5 128 267.9 128 224c0-52.94 43.06-96 96-96s96 43.06 96 96c0 41.3-27.5 73.3-40.3 84.4zM224 176c-26.5 0-48 21.5-48 48s21.5 48 48 48c21.06 0 40-14.09 46.03-34.28C271.3 233.3 272 228.7 272 224c0-26.5-21.5-48-48-48z" />
  </svg>
);

const SvgSquare9Solid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgSquare9Solid;
