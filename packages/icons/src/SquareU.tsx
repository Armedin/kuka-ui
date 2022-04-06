import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
    <path d="M384 32H64C28.65 32 0 60.65 0 96v320c0 35.35 28.65 64 64 64h320c35.35 0 64-28.65 64-64V96c0-35.35-28.7-64-64-64zm32 384c0 17.64-14.36 32-32 32H64c-17.64 0-32-14.36-32-32V96c0-17.64 14.36-32 32-32h320c17.64 0 32 14.36 32 32v320zm-96-288c-8.844 0-16 7.156-16 16v129.8c0 43.1-35.9 78.2-80 78.2s-80-35.1-80-78.2V144c0-8.8-7.2-16-16-16s-16 7.2-16 16v129.8c0 60.7 50.3 110.2 112 110.2s112-49.47 112-110.3V144c0-8.8-7.2-16-16-16z" />
  </svg>
);

const SvgSquareU = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgSquareU;
