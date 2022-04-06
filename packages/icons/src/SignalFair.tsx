import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" {...props}>
    <path d="M32 384c-8.84 0-16 7.2-16 16v96c0 8.844 7.156 16 15.1 16S48 504.8 48 496v-96c0-8.8-7.16-16-16-16zm128-96c-8.8 0-16 7.2-16 16v192c0 8.8 7.2 16 16 16s16-7.156 16-16V304c0-8.8-7.2-16-16-16z" />
  </svg>
);

const SvgSignalFair = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgSignalFair;
