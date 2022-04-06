import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256 256-114.6 256-256S397.4 0 256 0zm0 480C132.5 480 32 379.5 32 256S132.5 32 256 32s224 100.5 224 224-100.5 224-224 224zm96-336c0-8.8-7.2-16-16-16H176c-8.8 0-16 7.2-16 16s7.2 16 16 16h64.88c-.38 1.4-.88 2.8-.88 4.4v183.3c0 1.5.5 2.9.9 4.3H176c-8.8 0-16 7.2-16 16s7.2 16 16 16h160c8.844 0 16-7.156 16-16s-7.2-16-16-16h-64.88c.38-1.4.88-2.8.88-4.4V164.4c0-1.6-.5-3-.9-4.4H336c8.8 0 16-7.2 16-16z" />
  </svg>
);

const SvgCircleI = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgCircleI;
