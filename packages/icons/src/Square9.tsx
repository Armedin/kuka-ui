import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
    <path d="M224 128c-52.9 0-96 43.1-96 96 0 49.72 38.12 90.24 86.6 95.05l-48.19 36.14c-7.062 5.312-8.5 15.34-3.219 22.41C166.3 381.8 171.2 384 176 384a15.93 15.93 0 0 0 9.594-3.188l89.59-67.22C316.8 282.4 320 234.3 320 224c0-52.9-43.1-96-96-96zm0 160c-35.3 0-64-28.7-64-64 0-35.35 28.65-64 64-64s64 28.65 64 64c0 35.3-28.7 64-64 64zM384 32H64C28.65 32 0 60.65 0 96v320c0 35.35 28.65 64 64 64h320c35.35 0 64-28.65 64-64V96c0-35.35-28.7-64-64-64zm32 384c0 17.64-14.36 32-32 32H64c-17.64 0-32-14.36-32-32V96c0-17.64 14.36-32 32-32h320c17.64 0 32 14.36 32 32v320z" />
  </svg>
);

const SvgSquare9 = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgSquare9;
