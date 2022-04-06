import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
    <path d="M384 32c35.3 0 64 28.65 64 64v320c0 35.3-28.7 64-64 64H64c-35.35 0-64-28.7-64-64V96c0-35.35 28.65-64 64-64h320zm-122.2 99.6-136 112c-5.2 4.3-7.1 11.4-4.9 17.8 2.3 6.4 8.3 9.7 15.1 9.7h63.7l-38.4 90.6c-2.9 6.8-.8 14.7 5.1 19.1 5.9 4.4 14.1 4.2 19.8-.4l136-112c5.2-4.3 7.1-12.3 4.9-17.8-2.3-6.4-8.3-10.6-15.1-10.6h-63.7l38.4-89.7c2.9-6.8.8-14.7-5.1-19.1-5.9-4.4-14.1-5.1-19.8.4z" />
  </svg>
);

const SvgSquareBoltSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgSquareBoltSolid;
