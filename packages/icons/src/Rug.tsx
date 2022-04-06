import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" {...props}>
    <path d="M624 64c8.8 0 16 7.16 16 16s-7.2 16-16 16h-16v64h16c8.8 0 16 7.2 16 16s-7.2 16-16 16h-16v48h16c8.8 0 16 7.2 16 16s-7.2 16-16 16h-16v48h16c8.8 0 16 7.2 16 16s-7.2 16-16 16h-16v64h16c8.8 0 16 7.2 16 16s-7.2 16-16 16H16c-8.836 0-16-7.2-16-16s7.164-16 16-16h16v-64H16c-8.836 0-16-7.2-16-16s7.164-16 16-16h16v-48H16c-8.836 0-16-7.2-16-16s7.164-16 16-16h16v-48H16c-8.836 0-16-7.2-16-16s7.164-16 16-16h16V96H16C7.164 96 0 88.84 0 80s7.164-16 16-16h608zM64 96v320h64V96H64zm448 320h64V96h-64v320zM480 96H160v320h320V96z" />
  </svg>
);

const SvgRug = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgRug;
