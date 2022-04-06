import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M448 288c35.3 0 64 28.7 64 64v96c0 35.3-28.7 64-64 64H64C30.86 512 3.608 486.8.33 454.5.113 452.4 0 450.2 0 448V64C0 28.65 28.65 0 64 0h96c35.3 0 64 28.65 64 64v224h224zm-256-96v-64h-64c-8.8 0-16-7.2-16-16s7.2-16 16-16h64V64c0-17.67-14.3-32-32-32H64c-17.67 0-32 14.33-32 32v384c0 1.1.06 2.2.17 3.3C33.8 467.4 47.45 480 64 480h384c17.7 0 32-14.3 32-32v-96c0-17.7-14.3-32-32-32h-32v64c0 8.8-7.2 16-16 16s-16-7.2-16-16v-64h-64v64c0 8.8-7.2 16-16 16s-16-7.2-16-16v-64h-64v64c0 8.8-7.2 16-16 16s-16-7.2-16-16v-64h-64c-8.8 0-16-7.2-16-16s7.2-16 16-16h64v-64h-64c-8.8 0-16-7.2-16-16s7.2-16 16-16h64z" />
  </svg>
);

const SvgRulerCombined = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgRulerCombined;
