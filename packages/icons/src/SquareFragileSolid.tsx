import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
    <path d="M384 32c35.3 0 64 28.65 64 64v320c0 35.3-28.7 64-64 64H64c-35.35 0-64-28.7-64-64V96c0-35.35 28.65-64 64-64h320zM128 208c0 47.6 34.6 87.1 80 94.7V384h-48c-8.8 0-16 7.2-16 16s7.2 16 16 16h128c8.8 0 16-7.2 16-16s-7.2-16-16-16h-48v-81.3c45.4-7.6 80-47.1 80-94.7v-89.7c0-13.2-10-22.3-22.3-22.3H240l32 64-48 32 32 64-80-64 32-32-32-64h-25.7c-13.2 0-22.3 9.1-22.3 22.3V208z" />
  </svg>
);

const SvgSquareFragileSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgSquareFragileSolid;
