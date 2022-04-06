import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
    <path d="M384 32H64C28.65 32 0 60.65 0 96v320c0 35.34 28.65 64 64 64h320c35.35 0 64-28.66 64-64V96c0-35.35-28.7-64-64-64zm-58.2 303.2-22.63 22.63c-12.5 12.5-32.72 12.54-45.21.041L190.1 289.9l-45.25 45.25a15.994 15.994 0 0 1-17.44 3.469 15.984 15.984 0 0 1-9.877-14.78v-158.4c0-8.837 7.163-16 16-16h158.4c6.475 0 12.31 3.891 14.78 9.875 2.484 5.977 1.104 12.86-3.471 17.44l-45.25 45.25 67.92 67.92C338.4 302.5 338.3 322.7 325.8 335.2z" />
  </svg>
);

const SvgSquareUpLeftSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgSquareUpLeftSolid;
