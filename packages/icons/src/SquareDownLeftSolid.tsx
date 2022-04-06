import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
    <path d="M384 32H64C28.65 32 0 60.65 0 96v320c0 35.34 28.65 64 64 64h320c35.35 0 64-28.66 64-64V96c0-35.35-28.7-64-64-64zm-58.1 190-67.94 67.94 45.25 45.25a15.995 15.995 0 0 1 3.471 17.44 15.988 15.988 0 0 1-14.78 9.875H133.5c-8.835 0-15.1-7.163-15.1-15.1v-158.4a15.97 15.97 0 0 1 9.877-14.78 15.982 15.982 0 0 1 17.44 3.469l45.25 45.25 67.94-67.94c12.5-12.5 32.7-12.44 45.2.055l22.63 22.63C338.3 189.3 338.4 209.5 325.9 222z" />
  </svg>
);

const SvgSquareDownLeftSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgSquareDownLeftSolid;
