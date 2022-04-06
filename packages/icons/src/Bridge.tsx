import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" {...props}>
    <path d="M560 32c8.8 0 16 7.16 16 16s-7.2 16-16 16h-64v64h64c8.8 0 16 7.2 16 16s-7.2 16-16 16H16c-8.836 0-16-7.2-16-16s7.164-16 16-16h64V64H16C7.164 64 0 56.84 0 48s7.164-16 16-16h544zm-96 32h-96v64h96V64zm-224 0v64h96V64h-96zm-32 0h-96v64h96V64zM32 240c53.02 0 96 42.1 96 96v96c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16v-96c0-53.9 42.1-96 96-96 53 0 96 42.1 96 96v96c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16v-96c0-53.9 42.1-96 96-96h16c8.8 0 16 7.2 16 16s-7.2 16-16 16h-16c-35.3 0-64 28.7-64 64v96c0 26.5-21.5 48-48 48h-32c-26.5 0-48-21.5-48-48v-96c0-35.3-28.7-64-64-64s-64 28.7-64 64v96c0 26.5-21.5 48-48 48h-32c-26.5 0-48-21.5-48-48v-96c0-35.3-28.65-64-64-64H16c-8.836 0-16-7.2-16-16s7.164-16 16-16h16z" />
  </svg>
);

const SvgBridge = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgBridge;
