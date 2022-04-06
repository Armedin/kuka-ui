import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" {...props}>
    <path d="M0 160v192c0 35.35 28.65 64 64 64h384V96H64c-35.35 0-64 28.7-64 64zm608-32H480v256h128c17.67 0 32-14.33 32-32V160c0-17.7-14.3-32-32-32zm-24 184c0 8.875-7.125 16-16 16h-16c-8.875 0-16-7.125-16-16v-16c0-8.875 7.125-16 16-16h16c8.875 0 16 7.125 16 16v16zm0-96c0 8.875-7.125 16-16 16h-16c-8.875 0-16-7.125-16-16v-16c0-8.875 7.125-16 16-16h16c8.875 0 16 7.125 16 16v16z" />
  </svg>
);

const SvgUsbDriveSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgUsbDriveSolid;
