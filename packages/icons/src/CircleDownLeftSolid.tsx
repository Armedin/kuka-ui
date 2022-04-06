import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256 256-114.6 256-256S397.4 0 256 0zm101.9 222-67.92 67.92 45.25 45.25a15.995 15.995 0 0 1 3.471 17.44 15.988 15.988 0 0 1-14.78 9.875H165.5c-8.836 0-15.1-7.164-15.1-16v-158.4a15.97 15.97 0 0 1 9.877-14.78 15.982 15.982 0 0 1 17.44 3.469l45.25 45.25 67.92-67.92c12.5-12.5 32.72-12.46 45.21.041l22.63 22.63C370.3 189.3 370.4 209.5 357.9 222z" />
  </svg>
);

const SvgCircleDownLeftSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgCircleDownLeftSolid;
