import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
    <path d="M240 104c0 8.8-7.2 16-16.9 16-7.9 0-16-7.2-16-16V24c0-8.84 8.1-16 16-16 9.7 0 16.9 7.16 16.9 16v80zM87.1 376c0-13.3 11.65-24 24-24 14.2 0 24 10.7 24 24s-9.8 24-24 24c-12.35 0-24-10.7-24-24zm272.9 0c0 13.3-10.7 24-24 24s-24-10.7-24-24 10.7-24 24-24 24 10.7 24 24zM156.2 176h135.6c28.6 0 53.7 18.9 61.5 46.4l20.8 75.7c25.3 13.7 41.9 39 41.9 69.9v128c0 8.8-7.2 16-16 16s-16-7.2-16-16v-32H63.1v32c0 8.8-6.26 16-16 16-7.94 0-16-7.2-16-16V368c0-30.9 17.46-56.2 41.94-69.9l21.63-75.7c7.83-27.5 32.93-46.4 61.53-46.4zm0 32c-14.3 0-26.8 9.5-30.8 23.2L109.2 288H338.8l-16.2-56.8c-4-13.7-16.5-23.2-30.8-23.2H156.2zM384 368c0-26.5-21.5-48-48-48H111.1c-25.61 0-48 21.5-48 48v64H384v-64zM12.69 44.69c6.24-6.25 16.37-6.25 22.62 0l48 48c6.25 6.24 6.25 16.41 0 22.61-6.24 6.3-16.37 6.3-22.62 0l-48-47.99c-6.252-6.24-6.252-16.37 0-22.62zm400.01 0c6.2-6.25 16.4-6.25 22.6 0 6.3 6.24 6.3 16.38 0 22.62l-48 47.99c-6.2 6.3-16.4 6.3-22.6 0-6.3-6.2-6.3-16.36 0-22.61l48-48z" />
  </svg>
);

const SvgCarOn = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgCarOn;