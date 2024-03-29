import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M0 224c0-35.3 28.65-64 64-64h64v128c0 53 42.1 96 96 96h128v64c0 35.3-28.7 64-64 64H64c-35.35 0-64-28.7-64-64V224zm224 128c-35.3 0-64-28.7-64-64V64c0-35.35 28.7-64 64-64h224c35.3 0 64 28.65 64 64v224c0 35.3-28.7 64-64 64H224z" />
  </svg>
);

const SvgCloneSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgCloneSolid;
