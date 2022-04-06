import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M207.4 20.36c2.4 8.52-2.6 17.33-11.1 19.68C101.5 66.19 32 152.1 32 255.1c0 124.6 100.3 224 224 224s224-99.4 224-224c0-103-69.5-188.91-164.3-215.06-8.5-2.35-13.5-11.16-11.1-19.68 2.3-8.51 11.1-13.513 19.7-11.162C432.5 39.07 512 138.2 512 255.1c0 142.3-114.6 256-256 256S0 397.4 0 255.1C0 138.2 79.51 39.07 187.7 9.198c8.6-2.351 17.4 2.652 19.7 11.162z" />
  </svg>
);

const SvgCircleNotch = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgCircleNotch;
