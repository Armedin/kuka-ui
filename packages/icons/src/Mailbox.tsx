import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" {...props}>
    <path d="M176 192h-64c-8.8 0-16 7.2-16 16s7.2 16 16 16h64c8.8 0 16-7.2 16-16s-7.2-16-16-16zm320 0H336c-8.8 0-16 7.2-16 16s7.2 16 16 16h80v80c0 8.836 7.164 16 16 16h64c8.836 0 16-7.164 16-16v-96c0-8.8-7.2-16-16-16zm-16 96h-32v-64h32v64zM432 64H144C64.47 64 0 128.5 0 208v176c0 35.2 28.8 64 64 64h448c35.2 0 64-28.8 64-64V208c0-79.5-64.5-144-144-144zM256 416H64c-17.67 0-32-14.33-32-32V214.3c0-60.65 45.44-114.1 106-118.1 64.6-3.41 118 47.9 118 111.8v208zm288-32c0 17.67-14.33 32-32 32H288V208c0-45.5-21.5-85.6-54.5-112H432c61.88.125 111.9 50.13 112 112v176z" />
  </svg>
);

const SvgMailbox = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgMailbox;
