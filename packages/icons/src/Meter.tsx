import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M256 128c-8.8 0-16 7.2-16 16v64c0 8.8 7.2 16 16 16s16-7.156 16-16v-64c0-8.8-7.2-16-16-16zm-96 0c-8.8 0-16 7.2-16 16v64c0 8.8 7.2 16 16 16s16-7.156 16-16v-64c0-8.8-7.2-16-16-16zm192 0c-8.844 0-16 7.156-16 16v64c0 8.8 7.2 16 16 16s16-7.156 16-16v-64c0-8.8-7.2-16-16-16zM256 0C114.8 0 0 114.8 0 256s114.8 256 256 256 256-114.8 256-256S397.2 0 256 0zm0 480C132.5 480 32 379.5 32 256S132.5 32 256 32s224 100.5 224 224-100.5 224-224 224z" />
  </svg>
);

const SvgMeter = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgMeter;
