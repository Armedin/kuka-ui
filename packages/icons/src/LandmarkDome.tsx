import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M256 0c8.8 0 16 7.164 16 16v16.66C359.9 39.91 430.1 106.3 445.3 192H464c8.8 0 16 7.2 16 16s-7.2 16-16 16H48c-8.84 0-16-7.2-16-16s7.16-16 16-16h18.65C81.03 106.3 152.1 39.91 240 32.66V16c0-8.836 7.2-16 16-16zM99.2 192h313.6C397.1 118.1 333.4 64 256 64S114 118.1 99.2 192zM64 352v-96h32v96h80v-96h32v96h96v-96h32v96h80v-96h32v96c8.8 0 16 7.2 16 16s-7.2 16-16 16H64c-8.84 0-16-7.2-16-16s7.16-16 16-16zm-40 80c0-8.8 7.16-16 16-16h432c8.8 0 16 7.2 16 16s-7.2 16-16 16H40c-8.84 0-16-7.2-16-16zM0 496c0-8.8 7.164-16 16-16h480c8.8 0 16 7.2 16 16s-7.2 16-16 16H16c-8.836 0-16-7.2-16-16z" />
  </svg>
);

const SvgLandmarkDome = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgLandmarkDome;
