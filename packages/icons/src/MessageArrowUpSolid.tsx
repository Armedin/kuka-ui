import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M448 0H64C28.75 0 0 28.75 0 63.1v287.1c0 35.25 28.75 63.1 64 63.1h96v83.1c0 9.75 11.25 15.45 19.12 9.7l124.88-91h144c35.25 0 64-28.75 64-63.1V63.1C512 28.75 483.3 0 448 0zm-97.4 224.1c-4.7 5.6-10.8 7.9-16.9 7.9a24 24 0 0 1-16.97-7.031l-39.03-39.03V288c0 13.25-10.75 24-24 24s-24-10.75-24-24V185.9l-39.1 38.2c-9.375 9.375-24.56 9.375-33.94 0s-9.375-24.56 0-33.94l80-80c9.375-9.375 24.56-9.375 33.94 0l80 80c8.5 10.24 8.5 25.44 0 33.94z" />
  </svg>
);

const SvgMessageArrowUpSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgMessageArrowUpSolid;
