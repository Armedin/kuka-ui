import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" {...props}>
    <path d="M160 480C71.78 480 0 408.21 0 320v-48c0-8.8 7.156-16 16-16s16 7.2 16 16v48c0 70.59 57.41 128 128 128s128-57.41 128-128V48c0-8.84 7.2-16 16-16s16 7.16 16 16v272c0 88.2-71.8 160-160 160z" />
  </svg>
);

const SvgJ = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgJ;
