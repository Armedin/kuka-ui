import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256 256-114.6 256-256S397.4 0 256 0zm0 480C132.5 480 32 379.5 32 256S132.5 32 256 32s224 100.5 224 224-100.5 224-224 224zm96-128H194.8l169.4-197.6c4.062-4.75 5-11.41 2.375-17.09C363.9 131.6 358.3 128 352 128H160c-8.8 0-16 7.2-16 16s7.2 16 16 16h157.2L147.8 357.6c-4.062 4.75-5 11.41-2.375 17.09C148.1 380.4 153.8 384 160 384h192c8.844 0 16-7.156 16-16s-7.2-16-16-16z" />
  </svg>
);

const SvgCircleZ = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgCircleZ;
