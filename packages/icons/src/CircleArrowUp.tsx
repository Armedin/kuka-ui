import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M267.3 132.7c-3.1-3.1-7.2-4.7-11.3-4.7s-8.2 1.6-11.3 4.7l-96 96c-6.25 6.25-6.25 16.38 0 22.62s16.38 6.25 22.62 0L240 182.6V368c0 8.844 7.156 16 16 16s16-7.156 16-16V182.6l68.69 68.69c6.25 6.25 16.38 6.25 22.62 0s6.25-16.38 0-22.62L267.3 132.7zM256 0C114.6 0 0 114.6 0 256s114.6 256 256 256 256-114.6 256-256S397.4 0 256 0zm0 480C132.5 480 32 379.5 32 256S132.5 32 256 32s224 100.5 224 224-100.5 224-224 224z" />
  </svg>
);

const SvgCircleArrowUp = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgCircleArrowUp;
