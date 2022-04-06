import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
    <path d="M0 96c0-35.35 28.65-64 64-64h320c35.3 0 64 28.65 64 64v320c0 35.3-28.7 64-64 64H64c-35.35 0-64-28.7-64-64V96zm209.7 16.9-36.3 73.5-81.04 11.7c-6.03.9-11.04 5.1-12.92 10.9-1.88 5.8-.31 12.2 4.05 16.4l58.61 57.2-13.8 80.7c-1 6 1.4 12.1 6.4 14.8 4.9 4.5 11.4 4.9 16.8 2.1l71.6-38.1 73.4 38.1c5.4 2.8 11.9 2.4 16.8-2.1 5-2.7 7.4-8.8 6.4-14.8l-13.8-80.7 58.6-57.2c4.4-4.2 5.9-10.6 4.1-16.4-1.9-5.8-6.9-10-13-10.9l-81-11.7-36.3-73.5c-2.6-5.4-8.2-8.9-15.2-8.9-5.2 0-10.8 3.5-13.4 8.9z" />
  </svg>
);

const SvgSquareStarSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgSquareStarSolid;
