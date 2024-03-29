import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M144 96c8.8 0 16 7.2 16 16s-7.2 16-16 16H80c-8.84 0-16-7.2-16-16s7.16-16 16-16h64zm-80 80c0-8.8 7.16-16 16-16h64c8.8 0 16 7.2 16 16s-7.2 16-16 16H80c-8.84 0-16-7.2-16-16zm80 48c8.8 0 16 7.2 16 16s-7.2 16-16 16H80c-8.84 0-16-7.2-16-16s7.16-16 16-16h64zM448 32c35.3 0 64 28.65 64 64v320c0 35.3-28.7 64-64 64H64c-35.35 0-64-28.7-64-64V96c0-35.35 28.65-64 64-64h384zm0 32H224v384h224c17.7 0 32-14.3 32-32V96c0-17.67-14.3-32-32-32zM32 96v320c0 17.7 14.33 32 32 32h128V64H64c-17.67 0-32 14.33-32 32z" />
  </svg>
);

const SvgSidebar = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgSidebar;
