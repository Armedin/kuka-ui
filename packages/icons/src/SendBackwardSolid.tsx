import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M288 0c35.3 0 64 28.65 64 64v64H224c-53.9 0-96 42.1-96 96v128H64c-35.35 0-64-28.7-64-64V64C0 28.65 28.65 0 64 0h224zM160 224c0-35.3 28.7-64 64-64h224c35.3 0 64 28.7 64 64v224c0 35.3-28.7 64-64 64H224c-35.3 0-64-28.7-64-64V224zm64 224h224V224H224v224z" />
  </svg>
);

const SvgSendBackwardSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgSendBackwardSolid;
