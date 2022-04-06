import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M224.1 1.971C241.6-.211 256 14.33 256 31.1v224h224c17.7 0 32.2 15.3 30 32.8C494.3 414.2 386.6 512 256 512 114.6 512 0 397.4 0 255.1 0 125.4 97.75 17.69 224.1 1.971zM224 287.1V34.26C115.5 49.77 32 143.2 32 255.1 32 379.7 132.3 480 256 480c112.8 0 206.2-83.5 221.7-192.9H224z" />
  </svg>
);

const SvgCircleThreeQuarters = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgCircleThreeQuarters;
