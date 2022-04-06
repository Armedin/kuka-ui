import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M356.7 212.7 256 313.4 155.3 212.7c-6.25-6.25-16.38-6.25-22.62 0s-6.25 16.38 0 22.62l112 112C247.8 350.4 251.9 352 256 352s8.188-1.562 11.31-4.688l112-112c6.25-6.25 6.25-16.38 0-22.62s-16.41-6.292-22.61.008zM256 0C114.6 0 0 114.6 0 256s114.6 256 256 256 256-114.6 256-256S397.4 0 256 0zm0 480C132.5 480 32 379.5 32 256S132.5 32 256 32s224 100.5 224 224-100.5 224-224 224z" />
  </svg>
);

const SvgCircleChevronDown = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgCircleChevronDown;
