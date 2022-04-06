import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M256 176c-26.5 0-48 21.5-48 48v64c0 26.47 21.53 48 48 48s48-21.53 48-48v-64c0-26.5-21.5-48-48-48zm0-176C114.6 0 0 114.6 0 256s114.6 256 256 256 256-114.6 256-256S397.4 0 256 0zm96 288c0 52.94-43.06 96-96 96s-96-43.06-96-96v-64c0-52.94 43.06-96 96-96s96 43.06 96 96v64z" />
  </svg>
);

const SvgCircle0Solid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgCircle0Solid;
