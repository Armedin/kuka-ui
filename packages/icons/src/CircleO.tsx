import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256 256-114.6 256-256S397.4 0 256 0zm0 480C132.5 480 32 379.5 32 256S132.5 32 256 32s224 100.5 224 224-100.5 224-224 224zm0-352c-70.6 0-128 57.4-128 128s57.42 128 128 128 128-57.42 128-128-57.4-128-128-128zm0 224c-52.94 0-96-43.06-96-96s43.06-96 96-96 96 43.06 96 96-43.1 96-96 96z" />
  </svg>
);

const SvgCircleO = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgCircleO;
