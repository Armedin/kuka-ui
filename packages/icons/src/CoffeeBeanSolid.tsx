import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
    <path d="M212.7 244.4c54.55-28.28 102.2-68.18 133.8-120.9l19.7-32.88c9.536-15.92 3.996-37.47-12.95-45.02-83.39-37.13-186.2 5.417-259.7 79.04-72.35 72.44-116.1 174.8-81.27 256.8 9.901 23.33 43.16 24.04 56.19 2.297l5.029-8.395C106.9 319.6 154.9 274.4 212.7 244.4zm166.9-116.2-1.951 3.254c-34.51 57.6-82.7 107.3-143.1 136.6-56.08 27.2-102.7 69.89-134.7 123.3l-17.97 29.99c-9.536 15.92-3.994 37.47 12.96 45.02 83.39 37.13 186.2-5.417 259.7-79.04 72.35-72.44 116.1-174.8 81.32-256.8C425.9 107.1 392.7 106.4 379.6 128.2z" />
  </svg>
);

const SvgCoffeeBeanSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgCoffeeBeanSolid;
