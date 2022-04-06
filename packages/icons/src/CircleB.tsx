import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256 256-114.6 256-256S397.4 0 256 0zm0 480C132.5 480 32 379.5 32 256S132.5 32 256 32s224 100.5 224 224-100.5 224-224 224zm75.8-230.1c12.4-13 20.2-30.5 20.2-49.9 0-39.8-32.2-72-72-72h-88c-17.7 0-32 14.3-32 32v192c0 17.67 14.33 32 32 32h104c39.77 0 72-32.24 72-72 0-26.7-14.7-49.7-36.2-62.1zM192 160h88c22.1 0 40 17.9 40 40s-17.9 40-40 40h-88v-80zm104 192H192v-80h104c22.06 0 40 17.94 40 40s-17.9 40-40 40z" />
  </svg>
);

const SvgCircleB = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgCircleB;
