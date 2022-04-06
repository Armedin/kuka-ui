import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
    <path d="M192 64c0-17.67 14.3-32 32-32h64c17.7 0 32 14.33 32 32v64c0 17.7-14.3 32-32 32h-64c-17.7 0-32-14.3-32-32V64zm-53.9 110.1c15.3-8 34-2.7 43.7 12.6l32 55.4c8.8 15.3 3.6 34-11.7 43.7l-55.4 32c-15.3 8.8-34.9 3.6-44.6-11.7l-31.14-55.4c-8.84-15.3-3.59-34.9 11.71-44.6l55.43-32zM352 192c17.7 0 32 14.3 32 32v64c0 17.7-14.3 32-32 32h-64c-17.7 0-32-14.3-32-32v-64c0-17.7 14.3-32 32-32h64zm64 160c17.7 0 32 14.3 32 32v64c0 17.7-14.3 32-32 32h-64c-17.7 0-32-14.3-32-32v-64c0-17.7 14.3-32 32-32h64zm-256 32c0-17.7 14.3-32 32-32h64c17.7 0 32 14.3 32 32v64c0 17.7-14.3 32-32 32h-64c-17.7 0-32-14.3-32-32v-64zm-64-32c17.7 0 32 14.3 32 32v64c0 17.7-14.3 32-32 32H32c-17.67 0-32-14.3-32-32v-64c0-17.7 14.33-32 32-32h64z" />
  </svg>
);

const SvgCubesStackedSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgCubesStackedSolid;
