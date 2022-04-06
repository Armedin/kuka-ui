import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
    <path d="M224 176c-44.1 0-80 35.9-80 80s35.89 80 80 80 80-35.89 80-80-35.9-80-80-80zM384 32H64C28.65 32 0 60.65 0 96v320c0 35.35 28.65 64 64 64h320c35.35 0 64-28.65 64-64V96c0-35.35-28.7-64-64-64zM224 384c-70.58 0-128-57.42-128-128s57.42-128 128-128 128 57.42 128 128-57.4 128-128 128z" />
  </svg>
);

const SvgSquareOSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgSquareOSolid;
