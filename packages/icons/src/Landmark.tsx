import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M496.2 133.7c8.9 5.6 15.8 15.9 15.8 27.1 0 17.2-14 31.2-31.2 31.2H31.16C13.95 192 0 178 0 160.8c0-11.2 6.035-21.5 15.8-27.1L248.1 2.08c4.9-2.773 10-2.773 15.8 0L496.2 133.7zM34.34 160H477.7L256 34.39 34.34 160zM64 352V224h32v128h80V224h32v128h96V224h32v128h80V224h32v128c8.8 0 16 7.2 16 16s-7.2 16-16 16H64c-8.84 0-16-7.2-16-16s7.16-16 16-16zm-40 80c0-8.8 7.16-16 16-16h432c8.8 0 16 7.2 16 16s-7.2 16-16 16H40c-8.84 0-16-7.2-16-16zM0 496c0-8.8 7.164-16 16-16h480c8.8 0 16 7.2 16 16s-7.2 16-16 16H16c-8.836 0-16-7.2-16-16z" />
  </svg>
);

const SvgLandmark = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgLandmark;
