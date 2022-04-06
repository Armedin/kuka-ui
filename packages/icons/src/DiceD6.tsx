import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
    <path d="M431.9 116.1 239.9 4.2C235 1.438 229.5 0 224 0s-11 1.438-15.9 4.25l-192 111.9C6.125 121.1 0 132.7 0 144.5v223c0 11.75 6.125 22.48 16.12 28.36l192 111.9C213 510.6 218.5 512 224 512s11-1.438 15.88-4.25l192-111.9C441.9 390 448 379.3 448 367.5v-223c0-11.8-6.1-23.4-16.1-28.4zM224 32.1 399.8 135 224 237.5 47.9 134.7 224 32.1zM32.25 162.6 208 265.1v205.4l-176-103 .25-204.9zM240 470.9V265.1l176-102.6-.25 205.8L240 470.9z" />
  </svg>
);

const SvgDiceD6 = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgDiceD6;
