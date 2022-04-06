import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 512" {...props}>
    <path d="M48 16v480c0 8.832-7.166 16-16 16s-16-7.168-16-16V16c0-8.834 7.17-16 16-16s16 7.166 16 16z" />
  </svg>
);

const SvgPipe = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgPipe;
