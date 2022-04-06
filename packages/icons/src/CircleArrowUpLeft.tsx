import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="m214.9 192.3 89.1-.3c8.9-.9 16-7.2 16-16.9-.9-8-7.2-15.1-16-15.1l-128.9.4c-8 0-15.1 7.2-15.1 16V304c0 8.8 7.2 16 16 16s16-7.2 16-16v-89.4l132.7 132.7c3.1 3.1 7.2 4.7 11.3 4.7s8.188-1.562 11.31-4.688c6.25-6.25 6.25-16.38 0-22.62L214.9 192.3zM256 0C114.6 0 0 114.6 0 256s114.6 256 256 256 256-114.6 256-256S397.4 0 256 0zm0 480C132.5 480 32 379.5 32 256S132.5 32 256 32s224 100.5 224 224-100.5 224-224 224z" />
  </svg>
);

const SvgCircleArrowUpLeft = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgCircleArrowUpLeft;
