import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M448 0H64C28.75 0 0 28.75 0 63.1v287.1c0 35.25 28.75 63.1 64 63.1h96v83.1c0 9.75 11.25 15.45 19.12 9.7l124.88-91h144c35.25 0 64-28.75 64-63.1V63.1C512 28.75 483.3 0 448 0zM336.1 255c9.375 9.375 9.375 24.56 0 33.94-9.383 9.379-24.56 9.371-33.94 0L256 241.9l-47.9 46.2c-9.383 9.379-24.56 9.371-33.94 0-9.375-9.375-9.375-24.56 0-33.94L222.1 208 175 160.1c-9.375-9.375-9.375-24.56 0-33.94s24.56-9.375 33.94 0L256 174.1l47.03-47.03c9.375-9.375 24.56-9.375 33.94 0s9.375 24.56 0 33.94L289.9 208l46.2 47z" />
  </svg>
);

const SvgMessageXmarkSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgMessageXmarkSolid;
