import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" {...props}>
    <path d="M170.1 33.14c3.3-1.31 6-1.5 10.3-.52l218.7 62.49 144-57.58c15.8-6.3 32.9 5.31 32.9 22.29V394.6c0 9.8-6 18.6-15.1 22.3l-155 62c-3.3 1.3-6.9 1.5-10.3.5l-218.7-62.5-143.99 57.6C17.15 480.8 0 469.2 0 452.2V117.4c0-9.8 5.975-18.62 15.09-22.27L170.1 33.14zM32 440.4l128-51.2V71.63L32 122.8v317.6zm352-316.3L192 69.21V387.9l192 54.9V124.1zm32 316.3 128-51.2V71.63L416 122.8v317.6z" />
  </svg>
);

const SvgMap = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgMap;
