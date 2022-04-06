import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" {...props}>
    <path d="M368 176C368 78.8 289.2 0 192 0S16 78.8 16 176c0 91.8 70.31 167.1 160 175.2V400h-64c-8.8 0-16 7.2-16 16s7.156 16 16 16h64v64c0 8.844 7.156 16 16 16s16-7.156 16-16v-64h64c8.844 0 16-7.156 16-16s-7.156-16-16-16h-64v-48.81C297.7 343.1 368 267.8 368 176zm-320 0c0-79.4 64.6-144 144-144s144 64.6 144 144-64.6 144-144 144S48 255.4 48 176z" />
  </svg>
);

const SvgVenus = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgVenus;
