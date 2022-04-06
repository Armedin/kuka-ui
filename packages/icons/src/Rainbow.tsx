import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" {...props}>
    <path d="M320 32C143.6 32 0 175.6 0 352v112c0 8.8 7.156 16 16 16s16-7.2 16-16V352C32 193.2 161.2 64 320 64s288 129.2 288 288v112c0 8.844 7.156 16 16 16s16-7.156 16-16V352c0-176.4-143.6-320-320-320zm0 96C196.5 128 96 228.5 96 352v112c0 8.8 7.2 16 16 16s16-7.2 16-16V352c0-105.9 86.13-192 192-192s192 86.13 192 192v112c0 8.844 7.156 16 16 16s16-7.156 16-16V352c0-123.5-100.5-224-224-224zm0 96c-70.59 0-128 57.41-128 128v112c0 8.8 7.2 16 16 16s16-7.2 16-16V352c0-52.94 43.06-96 96-96s96 43.06 96 96v112c0 8.844 7.156 16 16 16s16-7.156 16-16V352c0-70.6-57.4-128-128-128z" />
  </svg>
);

const SvgRainbow = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgRainbow;
