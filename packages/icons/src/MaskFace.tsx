import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" {...props}>
    <path d="M432 192c8.8 0 16 7.2 16 16s-7.2 16-16 16H208c-8.8 0-16-7.2-16-16s7.2-16 16-16h224zm-240 80c0-8.8 7.2-16 16-16h224c8.8 0 16 7.2 16 16s-7.2 16-16 16H208c-8.8 0-16-7.2-16-16zm208 48c8.8 0 16 7.2 16 16s-7.2 16-16 16H240c-8.8 0-16-7.2-16-16s7.2-16 16-16h160zM206.5 111.9l37.1-24.78C266.2 72.05 292.8 64 320 64c27.2 0 53.8 8.05 76.4 23.12l37.1 24.78a96.2 96.2 0 0 0 53.3 16.1H592c26.5 0 48 21.5 48 48v85c0 51.4-35 96.2-84.8 108.7L469 391.2c-39.6 35.3-91.8 56.8-149 56.8s-109.4-21.5-149.9-56.8l-85.26-21.5C34.98 357.2 0 312.4 0 261v-85c0-26.5 21.49-48 48-48h105.2c19 0 37.5-5.6 53.3-16.1zM320 96c-20.9 0-41.3 6.2-58.6 17.8l-37.2 24.7c-21 14-45.7 21.5-71 21.5H128v64c0 106 85.1 192 192 192 106 0 192-86 192-192v-64h-25.2c-25.3 0-50-7.5-71-21.5l-37.2-24.7C361.3 102.2 340.9 96 320 96zM32 176v85c0 36.8 24.98 68.8 60.6 77.7l41.5 10.3C110 313.3 96 270.3 96 224v-64H48c-8.84 0-16 7.2-16 16zm576 85v-85c0-8.8-7.2-16-16-16h-48v64c0 46.3-14.1 89.3-38.1 125l41.5-10.3C583 329.8 608 297.8 608 261z" />
  </svg>
);

const SvgMaskFace = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgMaskFace;