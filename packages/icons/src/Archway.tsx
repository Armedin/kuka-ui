import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M0 48c0-8.84 7.164-16 16-16h480c8.8 0 16 7.16 16 16s-7.2 16-16 16h-16v384h16c8.8 0 16 7.2 16 16s-7.2 16-16 16H352V352c0-53.9-43-96-96-96-53.9 0-96 42.1-96 96v128H16c-8.836 0-16-7.2-16-16s7.164-16 16-16h16V64H16C7.164 64 0 56.84 0 48zm64 80h384V64H64v64zm0 32v288h64v-96c0-70.7 57.3-128 128-128s128 57.3 128 128v96h64V160H64z" />
  </svg>
);

const SvgArchway = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgArchway;
