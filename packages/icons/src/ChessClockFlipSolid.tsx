import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" {...props}>
    <path d="M221.3 242.8a15.933 15.933 0 0 0-11.31 4.688l-45.25 45.25A15.71 15.71 0 0 0 160 304c0 9.1 7.5 16 16 16 4.094 0 8.188-1.562 11.31-4.688l45.25-45.25a15.948 15.948 0 0 0 4.688-11.31C237.3 249.6 229.8 242.8 221.3 242.8zM464 224c-8.8 0-16 7.2-16 16v64c0 8.844 7.156 16 16 16s16-7.2 16-16v-64c0-8.8-7.2-16-16-16zm112-96h-88.25l.084-48H520c13.3 0 24-10.75 24-24s-10.7-24-24-24H408c-13.2 0-24 10.75-24 24s10.75 24 24 24h31.83l-.03 48H255.1l.004-16c0-8.875-7.25-16-16-16h-128c-8.875 0-16 7.125-16 16l.866 16H64c-35.35 0-64 28.7-64 64v224c0 35.35 28.65 64 64 64h512c35.35 0 64-28.65 64-64V192c0-35.3-28.7-64-64-64zM175.9 416c-61.75 0-112-50.13-112-112 .16-61.9 50.2-112 112.1-112 61.8.125 111.9 50.25 111.9 112 0 61.9-50.1 112-112 112zm288 0c-61.8 0-112-50.19-112-111.1 0-61.88 50.13-112 112-112 61.88.125 112 50.19 112 112.1-.1 60.9-50.2 111-112 111z" />
  </svg>
);

const SvgChessClockFlipSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgChessClockFlipSolid;
