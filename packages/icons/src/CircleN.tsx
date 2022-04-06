import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256 256-114.6 256-256S397.4 0 256 0zm0 480C132.5 480 32 379.5 32 256S132.5 32 256 32s224 100.5 224 224-100.5 224-224 224zm96-352c-8.844 0-16 7.156-16 16v180.8L172.1 133.6c-4.3-5.1-11.4-7-17.6-4.6-6.3 2.3-10.5 8.3-10.5 15v224c0 8.8 7.2 16 16 16s16-7.156 16-16V187.3l163.9 191.2c2.2 3.5 7.5 5.5 12.1 5.5 1.859 0 3.734-.328 5.547-1C363.8 380.7 368 374.7 368 368V144c0-8.8-7.2-16-16-16z" />
  </svg>
);

const SvgCircleN = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgCircleN;
