import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M0 256C0 114.6 114.6 0 256 0s256 114.6 256 256-114.6 256-256 256S0 397.4 0 256zm96-48c-8.84 0-16 7.2-16 16v64c0 8.8 7.16 16 16 16h320c8.8 0 16-7.2 16-16v-64c0-8.8-7.2-16-16-16H96z" />
  </svg>
);

const SvgDoNotEnterSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgDoNotEnterSolid;
