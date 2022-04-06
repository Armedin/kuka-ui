import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M496.5 185.8 31.7 14.53C30.93 6.418 24.31 0 16 0 7.164 0 0 7.164 0 16v480c0 8.8 7.164 16 16 16s16-7.2 16-16v-94.65l464.5-171.1c20.7-7.65 20.7-36.85 0-44.45zM32 367.2V48.75L464.2 208 32 367.2z" />
  </svg>
);

const SvgFlagPennant = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgFlagPennant;
