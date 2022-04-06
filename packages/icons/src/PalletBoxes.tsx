import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" {...props}>
    <path d="M448 288h64c35.35 0 64-28.65 64-64v-96c0-35.35-28.65-64-64-64h-64c-35.35 0-64 28.65-64 64v96c0 35.3 28.7 64 64 64zm-32-160c0-17.64 14.36-32 32-32h64c17.64 0 32 14.36 32 32v96c0 17.64-14.36 32-32 32h-64c-17.64 0-32-14.36-32-32v-96zM128 288h160c35.35 0 64-28.65 64-64V64c0-35.35-28.65-64-64-64H128C92.65 0 64 28.65 64 64v160c0 35.3 28.65 64 64 64zM96 64c0-17.64 14.36-32 32-32h160c17.64 0 32 14.36 32 32v160c0 17.64-14.36 32-32 32H128c-17.6 0-32-14.4-32-32V64zm528 416h-64v-96h64c8.844 0 16-7.156 16-16s-7.2-16-16-16H16c-8.844 0-16 7.2-16 16s7.156 16 16 16h64v96H16c-8.844 0-16 7.2-16 16s7.156 16 16 16h608c8.844 0 16-7.156 16-16s-7.2-16-16-16zm-320 0H112v-96h192v96zm224 0H336v-96h192v96z" />
  </svg>
);

const SvgPalletBoxes = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgPalletBoxes;
