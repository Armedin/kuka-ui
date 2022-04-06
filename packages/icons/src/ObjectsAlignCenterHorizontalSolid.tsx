import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
    <path d="M248 24v40h152c26.5 0 48 21.49 48 48v64c0 26.5-21.5 48-48 48H248v64h88c26.5 0 48 21.5 48 48v64c0 26.5-21.5 48-48 48h-88v40c0 13.3-10.7 24-24 24s-24-10.7-24-24v-40h-88c-26.51 0-48-21.5-48-48v-64c0-26.5 21.49-48 48-48h88v-64H48c-26.51 0-48-21.5-48-48v-64c0-26.51 21.49-48 48-48h152V24c0-13.25 10.7-24 24-24s24 10.75 24 24z" />
  </svg>
);

const SvgObjectsAlignCenterHorizontalSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgObjectsAlignCenterHorizontalSolid;
