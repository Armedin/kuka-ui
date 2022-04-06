import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256 256-114.6 256-256S397.4 0 256 0zm142.9 175.1-64 208c-3.1 10-12.4 16.9-22.9 16.9h-.422c-10.7-.188-19.97-7.438-22.75-17.77L256 260.3l-32.83 121.9c-2.77 10.4-12.07 17.6-22.77 17.8-10.73-.016-20.22-6.734-23.36-16.94l-64-208c-3.906-12.67 3.203-26.11 15.88-30 12.66-3.859 26.09 3.203 30 15.88L198.5 289.4l34.36-127.6C235.6 151.3 245.1 144 256 144s20.36 7.281 23.17 17.77l34.36 127.6 39.53-128.5c3.891-12.67 17.34-19.7 30-15.88 12.64 3.11 19.74 17.41 15.84 30.11z" />
  </svg>
);

const SvgCircleWSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgCircleWSolid;
