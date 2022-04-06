import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" {...props}>
    <path d="M495.2 114.4c26.36-30.88 21.24-78.5-12.49-102.5-29.23-20.88-70.21-13-93.44 14.25L187.9 261.5c-9 10.5-1.5 26.5 12.1 26.5h131.9c9.369 0 18.24-4.125 24.36-11.25L495.2 114.4zm-255 316c32.1-25.8 47.8-64 47.8-102.4v-8H179.1L0 512c88.97.125 174.1-29.12 239.6-81.13.2-.27.3-.37.6-.47zM304 480h-64c-8.8 0-16 7.2-16 16s7.2 16 16 16h64c8.836 0 16-7.164 16-16s-7.2-16-16-16zm128 0h-64c-8.836 0-16 7.164-16 16s7.164 16 16 16h64c8.836 0 16-7.164 16-16s-7.2-16-16-16zm128 0h-64c-8.836 0-16 7.164-16 16s7.164 16 16 16h64c8.836 0 16-7.164 16-16s-7.2-16-16-16z" />
  </svg>
);

const SvgScalpelLineDashedSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgScalpelLineDashedSolid;
