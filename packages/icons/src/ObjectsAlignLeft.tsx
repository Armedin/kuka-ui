import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M0 16C0 7.164 7.164 0 16 0c8.84 0 16 7.164 16 16v480c0 8.8-7.16 16-16 16-8.836 0-16-7.2-16-16V16zm128 96c0-26.51 21.5-48 48-48h288c26.5 0 48 21.49 48 48v64c0 26.5-21.5 48-48 48H176c-26.5 0-48-21.5-48-48v-64zm48 80h288c8.8 0 16-7.2 16-16v-64c0-8.8-7.2-16-16-16H176c-8.8 0-16 7.2-16 16v64c0 8.8 7.2 16 16 16zm-48 144c0-26.5 21.5-48 48-48h160c26.5 0 48 21.5 48 48v64c0 26.5-21.5 48-48 48H176c-26.5 0-48-21.5-48-48v-64zm48 80h160c8.8 0 16-7.2 16-16v-64c0-8.8-7.2-16-16-16H176c-8.8 0-16 7.2-16 16v64c0 8.8 7.2 16 16 16z" />
  </svg>
);

const SvgObjectsAlignLeft = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgObjectsAlignLeft;
