import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" {...props}>
    <path d="M64 192h64v64H64c-35.35 0-64-28.7-64-64V64C0 28.65 28.65 0 64 0h128c35.3 0 64 28.65 64 64H64v128zm512 256V320h-64v-64h64c35.3 0 64 28.7 64 64v128c0 35.3-28.7 64-64 64H448c-35.3 0-64-28.7-64-64h192zM416 96c35.3 0 64 28.7 64 64v192c0 35.3-28.7 64-64 64H224c-35.3 0-64-28.7-64-64V160c0-35.3 28.7-64 64-64h192z" />
  </svg>
);

const SvgBringFrontSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgBringFrontSolid;
