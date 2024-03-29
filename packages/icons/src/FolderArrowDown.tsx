import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M448 96H272l-45.3-45.25C214.7 38.74 198.5 32 181.5 32H64C28.65 32 0 60.65 0 96v320c0 35.35 28.65 64 64 64h384c35.35 0 64-28.65 64-64V160c0-35.3-28.7-64-64-64zm32 320c0 17.64-14.36 32-32 32H64c-17.64 0-32-14.36-32-32V96c0-17.64 14.36-32 32-32h117.5c8.549 0 16.58 3.328 22.63 9.375L258.7 128H448c17.64 0 32 14.36 32 32v256zm-235.3-36.7c6.25 6.25 16.38 6.25 22.62 0l80-80c6.25-6.25 6.25-16.38 0-22.62s-16.38-6.25-22.62 0L272 329.4V208c0-8.8-7.2-16-16-16s-16 7.2-16 16v121.4l-52.7-52.7c-3.1-3.1-7.2-4.7-11.3-4.7s-8.2 1.6-11.3 4.7c-6.25 6.25-6.25 16.38 0 22.62l80 79.98z" />
  </svg>
);

const SvgFolderArrowDown = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgFolderArrowDown;
