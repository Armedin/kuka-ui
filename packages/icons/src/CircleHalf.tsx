import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M224.1 1.971C241.6-.211 256 14.33 256 31.1V480c0 17.7-14.4 32.2-31.9 30C97.75 494.3 0 386.6 0 255.1 0 125.4 97.75 17.69 224.1 1.971zM224 34.26C115.5 49.77 32 143.2 32 255.1c0 113.7 83.5 207.1 192 222.6V34.26z" />
  </svg>
);

const SvgCircleHalf = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgCircleHalf;
