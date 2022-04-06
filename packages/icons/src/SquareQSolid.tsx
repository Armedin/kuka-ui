import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
    <path d="M224 176c-44.1 0-80 35.9-80 80s35.88 80 80 80c13.31 0 25.67-3.576 36.72-9.344l-29.69-29.69c-9.375-9.375-9.375-24.56 0-33.94s24.56-9.375 33.94 0l29.69 29.69C300.4 281.7 304 269.3 304 256c0-44.1-35.9-80-80-80zM384 32H64C28.65 32 0 60.65 0 96v320c0 35.35 28.65 64 64 64h320c35.35 0 64-28.65 64-64V96c0-35.35-28.7-64-64-64zm-39.9 311c9.375 9.375 9.375 24.56 0 33.94-3.8 4.76-9.9 7.06-16.1 7.06s-12.28-2.344-16.97-7.031l-15.15-15.15C275.4 375.8 250.6 384 224 384c-70.59 0-128-57.42-128-128s57.41-128 128-128 128 57.42 128 128c0 26.63-8.211 51.37-22.19 71.88L344.1 343z" />
  </svg>
);

const SvgSquareQSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgSquareQSolid;
