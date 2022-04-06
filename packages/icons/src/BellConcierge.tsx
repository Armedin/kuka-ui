import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M48 384c8.84 0 16-7.2 16-16 0-105.9 86.13-192 192-192s192 86.13 192 192c0 8.844 7.156 16 16 16s16-7.156 16-16c0-118.1-91.97-214.9-208-223.2V96h32c8.8 0 16-7.16 16-16s-7.2-16-16-16h-96c-8.8 0-16 7.16-16 16s7.2 16 16 16h32v48.81C123.1 153.1 32 249.9 32 368c0 8.8 7.16 16 16 16zm448 32H16c-8.844 0-16 7.2-16 16s7.156 16 16 16h480c8.844 0 16-7.156 16-16s-7.2-16-16-16z" />
  </svg>
);

const SvgBellConcierge = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgBellConcierge;
