import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
    <path d="M448 368V48c0-26.51-21.5-48-48-48H80C35.82 0 0 35.82 0 80v368c0 35.35 28.65 64 64 64h368c8.844 0 16-7.156 16-16s-7.2-16-16-16h-16v-66.95c18.6-6.65 32-24.25 32-45.05zM32 80c0-26.51 21.49-48 48-48h16v352H64c-11.71 0-22.55 3.389-32 8.9V80zm352 400H64c-17.64 0-32-14.36-32-32s14.36-32 32-32h320v64zm16-96H128V32h272c8.8 0 16 7.17 16 16v320c0 8.8-7.2 16-16 16zm-48-256H192c-8.8 0-16 7.2-16 16s7.2 16 16 16h160c8.844 0 16-7.156 16-16s-7.2-16-16-16zm0 96H192c-8.8 0-16 7.2-16 16s7.2 16 16 16h160c8.844 0 16-7.156 16-16s-7.2-16-16-16z" />
  </svg>
);

const SvgBook = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgBook;
