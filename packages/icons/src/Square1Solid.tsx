import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
    <path d="M384 32H64C28.65 32 0 60.65 0 96v320c0 35.35 28.65 64 64 64h320c35.35 0 64-28.65 64-64V96c0-35.35-28.7-64-64-64zm-96 352H160c-13.25 0-24-10.75-24-24s10.8-24 24-24h40V196.8l-14.7 9.8c-11 7.3-25.9 3.5-33.3-7.5-7.3-10.2-4.3-25.1 6.7-32.4l52-34.66a23.922 23.922 0 0 1 24.64-1.188C243.1 135 248 143.2 248 152v184h40c13.25 0 24 10.75 24 24s-10.7 24-24 24z" />
  </svg>
);

const SvgSquare1Solid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgSquare1Solid;
