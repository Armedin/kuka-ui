import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M464 64c26.5 0 48 21.49 48 48v64c0 26.5-21.5 48-48 48H48c-26.51 0-48-21.5-48-48v-64c0-26.51 21.49-48 48-48h416zm0 32H320v96h144c8.8 0 16-7.2 16-16v-64c0-8.8-7.2-16-16-16zM32 112v64c0 8.8 7.16 16 16 16h240V96H48c-8.84 0-16 7.2-16 16zm432 176c26.5 0 48 21.5 48 48v64c0 26.5-21.5 48-48 48H48c-26.51 0-48-21.5-48-48v-64c0-26.5 21.49-48 48-48h416zm0 32H192v96h272c8.8 0 16-7.2 16-16v-64c0-8.8-7.2-16-16-16zM32 336v64c0 8.8 7.16 16 16 16h112v-96H48c-8.84 0-16 7.2-16 16z" />
  </svg>
);

const SvgBarsProgress = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgBarsProgress;
