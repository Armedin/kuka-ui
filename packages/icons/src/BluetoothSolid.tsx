import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" {...props}>
    <path d="m208.6 255.1 100.5-87c6.9-7 10.9-14.9 10.9-25s-3.969-18-10.94-24.09l-127.1-112c-9.406-8.25-22.87-10.22-34.28-5.031a31.963 31.963 0 0 0-18.78 29.13v153.5L53.06 119.9c-13.28-11.6-33.5-10.3-45.152 3-11.625 13.3-10.281 33.5 3.032 45.2l100.5 87.91-100.5 87.91c-13.31 11.66-14.66 31.88-3.031 45.16 11.66 13.34 31.87 14.63 45.16 3.031L128 326.5V480c0 12.56 7.344 23.94 18.78 29.13C151 511.1 155.5 512 160 512a32.02 32.02 0 0 0 21.06-7.906l127.1-112C316 385.1 320 377.2 320 367.1s-3.969-18-10.94-24.09L208.6 255.1zM192 102.5l47.41 41.47L192 185.44V102.5zm0 307v-83l47.41 41.47L192 409.5z" />
  </svg>
);

const SvgBluetoothSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgBluetoothSolid;
