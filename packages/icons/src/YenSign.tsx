import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" {...props}>
    <path d="M160 220.6 291 38.65c5.2-7.17 15.2-8.8 22.4-3.63 7.1 5.16 8.7 15.16 2.7 22.33L196.1 224H272c8.8 0 16 7.2 16 16s-7.2 16-16 16h-96v64h96c8.8 0 16 7.2 16 16s-7.2 16-16 16h-96v112c0 8.8-7.2 16-16 16s-16-7.2-16-16V352H48c-8.84 0-16-7.2-16-16s7.16-16 16-16h96v-64H48c-8.84 0-16-7.2-16-16s7.16-16 16-16h75L3.017 57.35c-5.164-7.17-3.536-17.17 3.635-22.33 7.168-5.17 17.168-3.54 22.338 3.63L160 220.6z" />
  </svg>
);

const SvgYenSign = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgYenSign;
