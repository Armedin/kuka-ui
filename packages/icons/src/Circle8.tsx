import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256 256-114.6 256-256S397.4 0 256 0zm0 480C132.5 480 32 379.5 32 256S132.5 32 256 32s224 100.5 224 224-100.5 224-224 224zm59.7-230.1c12.5-13 20.3-30.5 20.3-49.9 0-39.7-32.3-72-72-72h-16c-39.7 0-72 32.3-72 72 0 19.37 7.781 36.91 20.28 49.87C174.7 262.3 160 285.4 160 312c0 39.7 32.3 72 72 72h48c39.7 0 72-32.3 72-72 0-26.6-14.7-49.7-36.3-62.1zM248 160h16c22.06 0 40 17.94 40 40s-17.9 40-40 40h-16c-22.1 0-40-17.9-40-40s17.9-40 40-40zm32 192h-48c-22.1 0-40-17.9-40-40s17.9-40 40-40h48c22.1 0 40 17.9 40 40s-17.9 40-40 40z" />
  </svg>
);

const SvgCircle8 = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgCircle8;
