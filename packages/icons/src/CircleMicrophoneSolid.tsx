import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256 256-114.6 256-256S397.4 0 256 0zm-48 144c0-26.5 21.5-48 48-48s48 21.48 48 48v112c0 26.52-21.48 48-48 48s-48-21.5-48-48V144zm176 112c0 65.1-49.03 118.4-112 126.4V400c0 8.837-7.163 16-16 16s-16-7.163-16-16v-17.62C177 374.4 128 321.1 128 256v-16.9c0-7.9 7.2-15.1 15.1-15.1 9.7 0 16.9 7.2 16 16v13.19c0 47.43 33.21 89.92 80.03 97.51C299.1 360.4 352 314.2 352 256v-16.9c0-7.9 7.2-15.1 16-15.1s16 7.2 16 15.1V256z" />
  </svg>
);

const SvgCircleMicrophoneSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgCircleMicrophoneSolid;
