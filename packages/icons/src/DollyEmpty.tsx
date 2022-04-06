import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" {...props}>
    <path d="M575 330.5c-3.078-8.312-12.25-12.52-20.55-9.484l-223.9 82.5C319 373.4 290.1 352 256 352c-5.018 0-9.889.592-14.65 1.477L141.8 54.7C130.9 21.98 100.4 0 65.88 0H15.1C7.155 0 0 7.157 0 16s7.156 16 16 16h49.88c20.69 0 38.98 13.19 45.55 32.83l100.2 300.6C190.2 379.8 176 404.2 176 432c0 44.2 35.8 80 80 80 42.91 0 77.64-33.87 79.63-76.29l229.9-84.7c8.27-3.91 12.57-12.21 9.47-20.51zM256 480c-26.47 0-48-21.53-48-48s21.53-47.1 47.1-47.1S304 405.5 304 432s-21.5 48-48 48z" />
  </svg>
);

const SvgDollyEmpty = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgDollyEmpty;
