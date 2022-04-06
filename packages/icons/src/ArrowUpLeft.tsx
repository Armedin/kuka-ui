import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" {...props}>
    <path d="M315.3 411.3c-3.1 3.1-7.2 4.7-11.3 4.7s-8.188-1.562-11.31-4.688L32 150.6v184.6c0 8.844-7.156 16-16 16s-16-7.156-16-16V111.9c0-8.812 7.141-15.97 15.95-16l224-.656c8.812 0 15.97 7.125 16 15.97.031 8.812-7.109 16-15.95 16.03l-185.6.555 260.9 260.9c6.3 6.201 6.3 16.401 0 22.601z" />
  </svg>
);

const SvgArrowUpLeft = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgArrowUpLeft;
