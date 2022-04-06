import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
    <path d="M240 288h96c26.5 0 48 21.5 48 48v64c0 26.5-21.5 48-48 48h-96v48c0 8.8-7.2 16-16 16s-16-7.2-16-16v-48h-96c-26.51 0-48-21.5-48-48v-64c0-26.5 21.49-48 48-48h96v-64H48c-26.51 0-48-21.5-48-48v-64c0-26.51 21.49-48 48-48h160V16c0-8.836 7.2-16 16-16s16 7.164 16 16v48h160c26.5 0 48 21.49 48 48v64c0 26.5-21.5 48-48 48H240v64zm176-112v-64c0-8.8-7.2-16-16-16H48c-8.84 0-16 7.2-16 16v64c0 8.8 7.16 16 16 16h352c8.8 0 16-7.2 16-16zM112 320c-8.8 0-16 7.2-16 16v64c0 8.8 7.2 16 16 16h224c8.8 0 16-7.2 16-16v-64c0-8.8-7.2-16-16-16H112z" />
  </svg>
);

const SvgObjectsAlignCenterHorizontal = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgObjectsAlignCenterHorizontal;
