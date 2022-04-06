import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" {...props}>
    <path d="M274.7 304H173.3C77.61 304 0 381.6 0 477.3 0 496.5 15.52 512 34.66 512h378.7c19.14 0 34.64-15.5 34.64-34.7 0-95.7-77.6-173.3-173.3-173.3zm138.6 176H34.66c-1.46 0-2.66-1.2-2.66-2.7C32 399.4 95.4 336 173.3 336h101.4c77.9 0 141.3 63.4 141.3 141.3 0 1.5-1.2 2.7-2.7 2.7zM224 256c70.7 0 128-57.31 128-128S294.7 0 224 0 96 57.31 96 128s57.3 128 128 128zm0-224c52.94 0 96 43.06 96 96 0 52.93-43.06 96-96 96s-96-43.1-96-96c0-52.94 43.1-96 96-96zm400 176h-64v-64c0-8.8-7.2-16-16-16s-16 7.156-16 16v64h-64c-8.8 0-16 7.2-16 16s7.156 16 16 16h64v64c0 8.844 7.156 16 16 16s16-7.156 16-16v-64h64c8.8 0 16-7.2 16-16s-7.2-16-16-16z" />
  </svg>
);

const SvgUserPlus = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgUserPlus;
