import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
    <path d="M224 96c-88.4 0-160 71.6-160 160s71.65 160 160 160 160-71.65 160-160S312.4 96 224 96zm0 288c-70.69 0-128-57.31-128-128s57.31-128 128-128 128 57.31 128 128-57.3 128-128 128zm0-224c-53.9 0-96 42.1-96 96s42.98 96 96 96 96-42.98 96-96-43-96-96-96zm0 160c-35.36 0-64-28.64-64-64s28.64-64 64-64 64 28.64 64 64-28.6 64-64 64zM384 32H64C28.64 32 0 60.64 0 96v320c0 35.36 28.64 64 64 64h320c35.36 0 64-28.64 64-64V96c0-35.36-28.6-64-64-64zm32 384c0 17.66-14.34 32-32 32H64c-17.66 0-32-14.34-32-32V96c0-17.66 14.34-32 32-32h320c17.66 0 32 14.34 32 32v320z" />
  </svg>
);

const SvgSquareRing = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgSquareRing;
