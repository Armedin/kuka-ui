import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
    <path d="M384 32H64C28.65 32 0 60.65 0 96v320c0 35.35 28.65 64 64 64h320c35.35 0 64-28.65 64-64V96c0-35.35-28.7-64-64-64zm32 384c0 17.64-14.36 32-32 32H64c-17.64 0-32-14.36-32-32V96c0-17.64 14.36-32 32-32h320c17.64 0 32 14.36 32 32v320zM233.4 192.1l48.19-36.14c7.062-5.312 8.5-15.34 3.219-22.41C281.7 130.2 276.8 128 272 128a15.93 15.93 0 0 0-9.594 3.188L172.8 198.4C131.2 229.6 128 277.7 128 288c0 52.94 43.06 96 96 96s96-43.06 96-96c0-49.7-38.1-90.2-86.6-95.9zM224 352c-35.35 0-64-28.65-64-64s28.65-64 64-64 64 28.65 64 64c0 35.3-28.7 64-64 64z" />
  </svg>
);

const SvgSquare6 = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgSquare6;
