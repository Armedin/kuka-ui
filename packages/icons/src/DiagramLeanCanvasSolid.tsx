import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" {...props}>
    <path d="M0 96c0-35.35 28.65-64 64-64h512c35.3 0 64 28.65 64 64v320c0 35.3-28.7 64-64 64H64c-35.35 0-64-28.7-64-64V96zm512 208h64V96h-64v208zM464 96h-64v80h64V96zm-112 0h-64v208h64V96zm-112 0h-64v80h64V96zm-112 0H64v208h64V96zM64 352v64h232v-64H64zm280 64h232v-64H344v64zM240 224h-64v80h64v-80zm160 0v80h64v-80h-64z" />
  </svg>
);

const SvgDiagramLeanCanvasSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgDiagramLeanCanvasSolid;
