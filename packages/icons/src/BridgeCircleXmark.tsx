import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" {...props}>
    <path d="M592 32c8.8 0 16 7.16 16 16s-7.2 16-16 16h-64v64h64c8.8 0 16 7.2 16 16s-7.2 16-16 16H48c-8.84 0-16-7.2-16-16s7.16-16 16-16h64V64H48c-8.84 0-16-7.16-16-16s7.16-16 16-16h544zm-96 32h-96v64h96V64zm-224 0v64h96V64h-96zm-32 0h-96v64h96V64zM64 240c53 0 96 42.1 96 96v96c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16v-96c0-53.9 42.1-96 96-96 16.1 0 31.2 3.1 44.6 10.9-7.3 8.1-13.7 16.9-19.4 26.3-7.7-3.4-17.1-5.2-25.2-5.2-35.3 0-64 28.7-64 64v96c0 26.5-21.5 48-48 48h-32c-26.5 0-48-21.5-48-48v-96c0-35.3-28.65-64-64-64H48c-8.84 0-16-7.2-16-16s7.16-16 16-16h16zm454.6 128 36.7 36.7c6.3 6.2 6.3 16.4 0 22.6-6.2 6.3-16.4 6.3-22.6 0L496 390.6l-36.7 36.7c-6.2 6.3-16.4 6.3-22.6 0-6.3-6.2-6.3-16.4 0-22.6l36.7-36.7-36.7-36.7c-6.3-6.2-6.3-16.4 0-22.6 6.2-6.3 16.4-6.3 22.6 0l36.7 36.7 36.7-36.7c6.2-6.3 16.4-6.3 22.6 0 6.3 6.2 6.3 16.4 0 22.6L518.6 368zm121.4 0c0 79.5-64.5 144-144 144s-144-64.5-144-144 64.5-144 144-144 144 64.5 144 144zM496 256c-61.9 0-112 50.1-112 112s50.1 112 112 112 112-50.1 112-112-50.1-112-112-112z" />
  </svg>
);

const SvgBridgeCircleXmark = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgBridgeCircleXmark;
