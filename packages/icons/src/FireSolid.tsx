import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
    <path d="M323.5 51.25c-20.7 19.25-39.5 39.5-56.1 59.85C240.1 73.62 206.2 35.5 168 0 69.75 91.12 0 210 0 281.6 0 408.9 100.2 512 224 512s224-103.1 224-230.4c0-53.2-52-163.1-124.5-230.35zM304.1 391.9C282.4 407 255.8 416 226.9 416 154.77 416 96 368.27 96 290.8c0-38.63 24.24-72.64 72.74-130.8 7 8 98.88 125.4 98.88 125.4l58.63-66.88c4.125 6.75 7.867 13.52 11.24 19.9C364.9 290.6 353.4 357.4 304.1 391.9z" />
  </svg>
);

const SvgFireSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgFireSolid;
