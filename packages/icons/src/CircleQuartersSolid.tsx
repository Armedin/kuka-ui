import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256 256-114.6 256-256S397.4 0 256 0zm135.8 391.8L256 256 120.2 391.8C85.49 357 64 309 64 256s21.49-101 56.23-135.8L256 256l135.8-135.8C426.5 154.1 448 202.1 448 256s-21.5 101-56.2 135.8z" />
  </svg>
);

const SvgCircleQuartersSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgCircleQuartersSolid;
