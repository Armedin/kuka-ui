import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
    <path d="M64 480c-35.35 0-64-28.7-64-64V96c0-35.35 28.65-64 64-64h320c35.3 0 64 28.65 64 64v320c0 35.3-28.7 64-64 64H64zm256-96c17.7 0 32-14.3 32-32V160c0-17.7-14.3-32-32-32s-32 14.3-32 32v192c0 17.7 14.3 32 32 32zm-64-224c0-17.7-14.3-32-32-32s-32 14.3-32 32v64c0 17.7 14.3 32 32 32s32-14.3 32-32v-64zM128 320c17.7 0 32-14.3 32-32V160c0-17.7-14.3-32-32-32s-32 14.3-32 32v128c0 17.7 14.3 32 32 32z" />
  </svg>
);

const SvgSquareKanbanSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgSquareKanbanSolid;
