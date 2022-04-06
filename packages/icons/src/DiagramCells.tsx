import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M64 224c-35.35 0-64-28.7-64-64V96c0-35.35 28.65-64 64-64h384c35.3 0 64 28.65 64 64v64c0 35.3-28.7 64-64 64H64zm416-64V96c0-17.67-14.3-32-32-32H64c-17.67 0-32 14.33-32 32v64c0 17.7 14.33 32 32 32h384c17.7 0 32-14.3 32-32zm32 256c0 35.3-28.7 64-64 64H64c-35.35 0-64-28.7-64-64v-64c0-35.3 28.65-64 64-64h384c35.3 0 64 28.7 64 64v64zm-64 32c17.7 0 32-14.3 32-32v-64c0-17.7-14.3-32-32-32H64c-17.67 0-32 14.3-32 32v64c0 17.7 14.33 32 32 32h384z" />
  </svg>
);

const SvgDiagramCells = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgDiagramCells;
