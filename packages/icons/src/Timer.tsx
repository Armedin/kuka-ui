import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M512 256c0 141.4-114.6 256-256 256S0 397.4 0 256c0-53.3 16.28-102.8 44.15-143.8 4.97-7.3 14.92-9.2 22.22-4.2 7.31 4.1 9.21 14.9 4.24 22.2C46.24 166.1 32 209.4 32 256c0 123.7 100.3 224 224 224s224-100.3 224-224c0-118.3-91.8-215.23-208-223.44V112c0 8.8-7.2 16-16 16s-16-7.2-16-16V16c0-8.836 7.2-16 16-16 141.4 0 256 114.6 256 256zm-244.7-11.3c6.3 6.2 6.3 16.4 0 22.6-6.2 6.3-16.4 6.3-22.6 0l-96-96c-6.3-6.2-6.3-16.4 0-22.6 6.2-6.3 16.4-6.3 22.6 0l96 96z" />
  </svg>
);

const SvgTimer = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgTimer;
