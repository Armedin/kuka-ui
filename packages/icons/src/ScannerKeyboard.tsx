import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M128 16c0-8.836 7.2-16 16-16s16 7.164 16 16v32c0 8.84-7.2 16-16 16s-16-7.16-16-16V16zm192 0c0-8.836 7.2-16 16-16s16 7.164 16 16v32c0 8.84-7.2 16-16 16s-16-7.16-16-16V16zm-96 0v32c0 8.84-7.2 16-16 16s-16-7.16-16-16V16c0-8.836 7.2-16 16-16s16 7.164 16 16zm176 0c0-8.836 7.2-16 16-16s16 7.164 16 16v256c0 8.8-7.2 16-16 16s-16-7.2-16-16V16zm112 0v256c0 8.8-7.2 16-16 16s-16-7.2-16-16V16c0-8.836 7.2-16 16-16s16 7.164 16 16zM64 200c0-22.1 17.91-40 40-40h144c22.1 0 40 17.9 40 40v48c0 22.1-17.9 40-40 40H104c-22.09 0-40-17.9-40-40v-48zm32 0v48c0 4.4 3.58 8 8 8h144c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8H104c-4.42 0-8 3.6-8 8zm48 120c8.8 0 16 7.2 16 16s-7.2 16-16 16H80c-8.84 0-16-7.2-16-16s7.16-16 16-16h64zm-80 80c0-8.8 7.16-16 16-16h64c8.8 0 16 7.2 16 16s-7.2 16-16 16H80c-8.84 0-16-7.2-16-16zm208-80c8.8 0 16 7.2 16 16s-7.2 16-16 16h-64c-8.8 0-16-7.2-16-16s7.2-16 16-16h64zm-80 80c0-8.8 7.2-16 16-16h64c8.8 0 16 7.2 16 16s-7.2 16-16 16h-64c-8.8 0-16-7.2-16-16zm96-304c35.3 0 64 28.7 64 64v288c0 35.3-28.7 64-64 64H64c-35.35 0-64-28.7-64-64V160c0-35.3 28.65-64 64-64h224zm0 32H64c-17.67 0-32 14.3-32 32v288c0 17.7 14.33 32 32 32h224c17.7 0 32-14.3 32-32V160c0-17.7-14.3-32-32-32z" />
  </svg>
);

const SvgScannerKeyboard = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgScannerKeyboard;