import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
    <path d="M384 32H64C28.65 32 0 60.65 0 96v320c0 35.35 28.65 64 64 64h320c35.35 0 64-28.65 64-64V96c0-35.35-28.7-64-64-64zM236 384h-44.6c-28.23 0-53.2-17.1-62.13-44.78-4.188-12.59 2.609-26.19 15.19-30.38C157 304.8 170.6 311.5 174.8 324c2.4 7.2 9 12 16.6 12H236c19.84 0 36-16.16 36-36s-16.2-36-36-36h-52a24.01 24.01 0 0 1-22.38-15.31C158 239.5 160.5 229 167.8 222.3l50.5-46.3H152c-13.2 0-24-10.7-24-24s10.8-24 24-24h128a24.01 24.01 0 0 1 22.38 15.31 24 24 0 0 1-6.156 26.38L245.2 216.5c42 4.6 74.8 40.3 74.8 83.5 0 46.3-37.7 84-84 84z" />
  </svg>
);

const SvgSquare3Solid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgSquare3Solid;
