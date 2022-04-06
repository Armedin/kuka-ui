import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M447.1.004h-384c-35.25 0-64 28.75-64 63.1v287.1c0 35.25 28.75 63.1 64 63.1h96v83.98c0 9.75 11.25 15.45 19.12 9.7l124.9-93.68h144c35.25 0 64-28.75 64-63.1V63.1C511.1 28.75 483.2.004 447.1.004zM128 96c17.67 0 32 14.33 32 32s-14.3 32-32 32-32-14.3-32-32 14.3-32 32-32zm286.1 215.6a16 16 0 0 1-14.11 8.442h-288a15.986 15.986 0 0 1-14.26-8.742 16 16 0 0 1 1.334-16.68l70-96C172.1 194.4 176.9 192 182 192s9.916 2.441 12.93 6.574l22.36 30.66 62.74-94.11C283 130.7 287.1 128 293.3 128s10.35 2.672 13.31 7.125l106.7 160c3.29 4.875 3.59 11.175.79 16.475z" />
  </svg>
);

const SvgMessageImageSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgMessageImageSolid;
