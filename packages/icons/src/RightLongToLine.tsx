import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" {...props}>
    <path d="M640 432c0 8.8-7.2 16-16 16s-16-7.2-16-16V80c0-8.84 7.2-16 16-16s16 7.16 16 16v352zM40.03 192H352.3l.2-40c0-15.9 9.4-30.3 24-36.7 14.6-7.2 31.5-3.5 43.2 7.4l112.1 104c8.1 7.5 12.2 18.4 12.2 29.3-.9 10.9-4.1 21.8-12.2 29.3l-112.1 104c-11.7 10.9-28.6 13.7-43.2 7.3-14.6-6.3-24-20.7-24-37.5l-.2-40H40.03c-22.06 0-40.03-17-40.03-40V232c0-22.1 17.97-40 40.03-40zm357.07-45.9c-4.3-4.7-12.6-2-12.6 5.9v72H40.03c-4.44 0-8.03 3.6-8.03 8v47.1c0 5.3 3.59 8 8.03 8H384.5v72c0 7.9 8.3 11.5 12.6 6.8l112.9-104c2.2-2.1 2.6-4.6 2.6-5.9 0-1.3-.4-3.8-2.6-5.8L397.1 146.1z" />
  </svg>
);

const SvgRightLongToLine = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgRightLongToLine;
