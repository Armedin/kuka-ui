import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" {...props}>
    <path d="M273.1 46.86C303.1 76.87 320 117.6 320 160v192c0 8.5-3.4 16.6-9.4 22.6S296.5 384 288 384H32c-8.49 0-16.63-3.4-22.628-9.4C3.371 368.6 0 360.5 0 352V160c0-42.4 16.86-83.13 46.86-113.14C76.87 16.86 117.6 0 160 0c42.4 0 83.1 16.86 113.1 46.86zM128 416h64v64c0 8.5-3.4 16.6-9.4 22.6S168.5 512 160 512c-8.5 0-16.6-3.4-22.6-9.4S128 488.5 128 480v-64z" />
  </svg>
);

const SvgPopsicleSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgPopsicleSolid;
