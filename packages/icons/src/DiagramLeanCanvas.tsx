import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" {...props}>
    <path d="M0 96c0-35.35 28.65-64 64-64h512c35.3 0 64 28.65 64 64v320c0 35.3-28.7 64-64 64H64c-35.35 0-64-28.7-64-64V96zm512 224h96V96c0-17.67-14.3-32-32-32h-64v256zM480 64h-96v128h96V64zm-128 0h-64v256h64V64zm-96 0h-96v128h96V64zm-128 0H64c-17.67 0-32 14.33-32 32v224h96V64zM32 352v64c0 17.7 14.33 32 32 32h240v-96H32zm304 96h240c17.7 0 32-14.3 32-32v-64H336v96zm-80-224h-96v96h96v-96zm128 0v96h96v-96h-96z" />
  </svg>
);

const SvgDiagramLeanCanvas = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgDiagramLeanCanvas;
