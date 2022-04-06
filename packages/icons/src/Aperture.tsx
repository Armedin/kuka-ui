import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256 256-114.6 256-256S397.4 0 256 0zm202.1 160H237.5l70.27-121.7C374.3 54.12 429.3 99.59 458.1 160zM292.9 320h-73.8l-37-64 37-64h73.89l36.95 64-37.04 64zM256 32c6.059 0 12.01.434 17.95.908L163.6 223.1 93.41 102.4C134.3 59.15 191.1 32 256 32zM71.76 128.9 182.1 320H41.4c-6.03-20.3-9.4-41.8-9.4-64 0-47.2 14.75-91 39.76-127.1zM53.92 352h220.5l-70.27 121.7C137.7 457.9 82.74 412.4 53.92 352zM256 480c-6.059 0-12.01-.434-17.95-.908l110.3-191.1 70.22 121.6C377.7 452.8 320 480 256 480zm184.2-96.9L329.9 192h140.7c6 20.3 9.4 41.8 9.4 64 0 47.2-14.7 90.1-39.8 127.1z" />
  </svg>
);

const SvgAperture = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgAperture;
