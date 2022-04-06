import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M512 416c0 35.3-28.7 64-64 64H64c-35.35 0-64-28.7-64-64v-64c0-35.3 28.65-64 64-64h384c35.3 0 64 28.7 64 64v64zM224 224H64c-35.35 0-64-28.7-64-64V96c0-35.35 28.65-64 64-64h304c44.2 0 80 35.82 80 80v16h38.1c21.3 0 32 25.9 16.9 40.1L432.1 239c-8.5 9.4-23.7 9.4-33.1 0l-70.9-70.9c-14.2-14.2-3.5-40.1 17.8-40.1H384v-16c0-8.8-7.2-16-16-16h-80v64c0 35.3-28.7 64-64 64zM64 160h160V96H64v64z" />
  </svg>
);

const SvgDiagramSuccessorSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgDiagramSuccessorSolid;
