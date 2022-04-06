import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M0 96c0-35.35 28.65-64 64-64h384c35.3 0 64 28.65 64 64v64c0 35.3-28.7 64-64 64H160v96c0 17.7 14.3 32 32 32h32c0-35.3 28.7-64 64-64h160c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H288c-35.3 0-64-28.7-64-64h-32c-53.9 0-96-43-96-96v-96H64c-35.35 0-64-28.7-64-64V96zm448 256H288v64h160v-64z" />
  </svg>
);

const SvgDiagramSubtaskSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgDiagramSubtaskSolid;
