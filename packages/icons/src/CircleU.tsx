import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256 256-114.6 256-256S397.4 0 256 0zm0 480C132.5 480 32 379.5 32 256S132.5 32 256 32s224 100.5 224 224-100.5 224-224 224zm96-336c-8.844 0-16 7.156-16 16v129.8c0 43.1-35.9 78.2-80 78.2s-80-35.09-80-78.25V160c0-8.844-7.156-16-16-16s-16 7.2-16 16v129.8c0 60.7 50.3 110.2 112 110.2s112-49.47 112-110.3V160c0-8.8-7.2-16-16-16z" />
  </svg>
);

const SvgCircleU = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgCircleU;
