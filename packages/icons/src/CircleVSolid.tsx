import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256 256-114.6 256-256S397.4 0 256 0zm125.5 178.7-104 208c-4.1 8.2-12.4 13.3-21.5 13.3s-17.41-5.141-21.47-13.27l-104-208c-5.93-11.83-1.13-26.23 10.77-32.23 11.92-5.891 26.28-1.125 32.2 10.73L256 322.3l82.53-165.1c5.938-11.86 20.34-16.62 32.2-10.73 11.87 6.03 16.67 20.43 10.77 32.23z" />
  </svg>
);

const SvgCircleVSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgCircleVSolid;
