import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M464 32H144c-26.5 0-48 21.53-48 48v336c0 17.66-14.36 32-32 32s-32-14.34-32-32V112c0-8.8-7.16-16-16-16s-16 7.2-16 16v304c0 35.28 28.7 64 64 64h368c44.11 0 80-35.88 80-80V80c0-26.47-21.5-48-48-48zm16 368c0 26.47-21.53 48-48 48H119.4c5.5-9.4 8.6-20.3 8.6-32V80c0-8.81 7.2-16 16-16h320c8.8 0 16 7.19 16 16v320zm-208-96h-96c-8.8 0-16 7.2-16 16s7.156 16 16 16h96c8.844 0 16-7.156 16-16s-7.2-16-16-16zm160 0h-96c-8.8 0-16 7.2-16 16s7.156 16 16 16h96c8.844 0 16-7.156 16-16s-7.2-16-16-16zm-160 64h-96c-8.8 0-16 7.2-16 16s7.156 16 16 16h96c8.844 0 16-7.156 16-16s-7.2-16-16-16zm160 0h-96c-8.844 0-16 7.156-16 16s7.156 16 16 16h96c8.844 0 16-7.156 16-16s-7.2-16-16-16zM416 96H192c-17.7 0-32 14.3-32 32v96c0 17.67 14.33 32 32 32h224c17.67 0 32-14.33 32-32v-96c0-17.7-14.3-32-32-32zm0 128H192v-96h224v96z" />
  </svg>
);

const SvgNewspaper = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgNewspaper;
