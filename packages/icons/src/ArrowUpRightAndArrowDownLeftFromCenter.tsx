import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M496 0H336c-8.8 0-16 7.156-16 16s7.2 16 16 16h121.4L292.7 196.7c-6.25 6.25-6.25 16.38 0 22.62s16.38 6.25 22.62 0L480 54.63V176c0 8.8 7.2 16 16 16s16-7.2 16-16V16c0-8.844-7.2-16-16-16zM196.7 292.7 32 457.4V336c0-8.8-7.16-16-16-16s-16 7.2-16 16v160c0 8.8 7.156 16 16 16h160c8.8 0 16-7.2 16-16s-7.2-16-16-16H54.63l164.7-164.7c6.25-6.25 6.25-16.38 0-22.62s-16.43-6.28-22.63.02z" />
  </svg>
);

const SvgArrowUpRightAndArrowDownLeftFromCenter = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgArrowUpRightAndArrowDownLeftFromCenter;
