import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M448 288c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H64c-35.35 0-64-28.7-64-64v-64c0-35.3 28.65-64 64-64h168v-64h-46.1c-21.3 0-32-25.9-17.8-41l70.9-70.9c9.4-8.5 24.6-8.5 33.1 0L343 183c15.1 15.1 4.4 41-16.9 41H280v64h168zM64 352v64h384v-64H64zm335-128c5.6-18.4 2-39.6-14.9-55.6l-88.5-89.37c-21.9-21.87-57.3-21.87-79.2 0L127 168.4c-16.9 16-19.6 37.2-14.9 55.6H64c-35.35 0-64-28.7-64-64V96c0-35.35 28.65-64 64-64h384c35.3 0 64 28.65 64 64v64c0 35.3-28.7 64-64 64h-49z" />
  </svg>
);

const SvgDiagramPreviousSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgDiagramPreviousSolid;
