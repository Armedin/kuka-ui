import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M496 480H393.9c51.8-34.4 86.1-93.3 86.1-160 0-105.9-86.13-192-192-192V64c0-17.67-14.33-32-32-32V16c0-8.836-7.2-16-16-16h-64c-8.8 0-16 7.164-16 16v16c-17.7 0-32 14.33-32 32v224c0 17.67 14.33 32 32 32h96c17.67 0 32-14.33 32-32V160c88.22 0 160 71.78 160 160s-71.78 160-160 160H16c-8.844 0-16 7.2-16 16s7.156 16 16 16h480c8.844 0 16-7.156 16-16s-7.2-16-16-16zM256 288h-96V64c17.67 0 32-14.33 32-32h32c0 17.67 14.33 32 32 32v224zm-16 96c8.844 0 16-7.156 16-16s-7.2-16-16-16h-64c-8.8 0-16 7.2-16 16s7.2 16 16 16h64zm-128 64h192c8.844 0 16-7.156 16-16s-7.2-16-16-16H112c-8.8 0-16 7.2-16 16s7.2 16 16 16z" />
  </svg>
);

const SvgMicroscope = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgMicroscope;
