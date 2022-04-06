import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" {...props}>
    <path d="M352 359.8c22.46 0 31.1 19.53 31.1 31.99 0 23.14-66.96 88.23-164.5 88.23-137.1 0-219.4-117.8-219.4-224 0-103.8 79.87-223.1 219.4-223.1 99.47 0 164.5 66.12 164.5 88.23 0 12.27-9.527 32.01-32.01 32.01-31.32 0-45.8-56.25-132.5-56.25-97.99 0-155.4 84.59-155.4 159.1 0 74.03 56.42 160 155.4 160C306.5 416 320.5 359.8 352 359.8z" />
  </svg>
);

const SvgCSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgCSolid;
