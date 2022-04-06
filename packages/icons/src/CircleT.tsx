import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256 256-114.6 256-256S397.4 0 256 0zm0 480C132.5 480 32 379.5 32 256S132.5 32 256 32s224 100.5 224 224-100.5 224-224 224zm112-320H144c-8.8 0-16 7.2-16 16s7.2 16 16 16h96v176c0 8.844 7.156 16 16 16s16-7.156 16-16V192h96c8.8 0 16-7.2 16-16s-7.2-16-16-16z" />
  </svg>
);

const SvgCircleT = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgCircleT;
