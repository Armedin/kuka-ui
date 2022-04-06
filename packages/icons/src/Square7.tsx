import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
    <path d="M303.9 128h-160c-8.844 0-16 7.156-16 16s7.156 16 16 16h132.4L162 360.1c-4.375 7.688-1.688 17.44 5.969 21.84C170.6 383.3 173.3 384 176 384a16.07 16.07 0 0 0 13.91-8.062l127.9-224a16.092 16.092 0 0 0-.063-15.97C314.9 131 309.6 128 303.9 128zM384 32H64C28.65 32 0 60.65 0 96v320c0 35.35 28.65 64 64 64h320c35.35 0 64-28.65 64-64V96c0-35.35-28.7-64-64-64zm32 384c0 17.64-14.36 32-32 32H64c-17.64 0-32-14.36-32-32V96c0-17.64 14.36-32 32-32h320c17.64 0 32 14.36 32 32v320z" />
  </svg>
);

const SvgSquare7 = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgSquare7;
