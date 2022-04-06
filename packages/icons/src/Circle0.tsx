import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256 256-114.6 256-256S397.4 0 256 0zm0 480C132.5 480 32 379.5 32 256S132.5 32 256 32s224 100.5 224 224-100.5 224-224 224zm0-352c-52.9 0-96 43.1-96 96v64c0 52.94 43.06 96 96 96s96-43.06 96-96v-64c0-52.9-43.1-96-96-96zm64 160c0 35.28-28.72 64-64 64s-64-28.72-64-64v-64c0-35.28 28.72-64 64-64s64 28.72 64 64v64z" />
  </svg>
);

const SvgCircle0 = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgCircle0;
