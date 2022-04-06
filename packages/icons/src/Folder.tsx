import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M447.1 96H272l-45.3-45.25C214.7 38.74 198.5 32 181.5 32H63.1c-35.35 0-64 28.65-64 64v320c0 35.35 28.65 64 64 64h384c35.35 0 64-28.65 64-64V160c0-35.3-27.8-64-64-64zM480 416c0 17.64-14.36 32-32 32H64c-17.64 0-32-14.36-32-32V96c0-17.64 14.36-32 32-32h117.5c8.549 0 16.58 3.328 22.63 9.375L258.7 128H448c17.64 0 32 14.36 32 32v256z" />
  </svg>
);

const SvgFolder = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgFolder;
