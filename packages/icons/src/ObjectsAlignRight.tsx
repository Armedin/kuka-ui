import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M512 496c0 8.8-7.2 16-16 16s-16-7.2-16-16V16c0-8.836 7.2-16 16-16s16 7.164 16 16v480zM384 176c0 26.5-21.5 48-48 48H48c-26.51 0-48-21.5-48-48v-64c0-26.51 21.49-48 48-48h288c26.5 0 48 21.49 48 48v64zm-32 0v-64c0-8.8-7.2-16-16-16H48c-8.84 0-16 7.2-16 16v64c0 8.8 7.16 16 16 16h288c8.8 0 16-7.2 16-16zm32 224c0 26.5-21.5 48-48 48H176c-26.5 0-48-21.5-48-48v-64c0-26.5 21.5-48 48-48h160c26.5 0 48 21.5 48 48v64zm-32 0v-64c0-8.8-7.2-16-16-16H176c-8.8 0-16 7.2-16 16v64c0 8.8 7.2 16 16 16h160c8.8 0 16-7.2 16-16z" />
  </svg>
);

const SvgObjectsAlignRight = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgObjectsAlignRight;
