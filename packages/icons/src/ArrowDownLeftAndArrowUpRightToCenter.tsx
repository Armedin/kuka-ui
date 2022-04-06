import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M208 288H48c-8.84 0-16 7.2-16 16s7.16 16 16 16h121.4L20.7 468.7c-6.25 6.25-6.25 16.38 0 22.62s16.38 6.25 22.62 0L192 342.6V464c0 8.8 7.2 16 16 16s16-7.2 16-16V304c0-8.8-7.2-16-16-16zM491.3 20.69c-6.25-6.25-16.38-6.25-22.62 0L320 169.4V48c0-8.84-7.2-16-16-16s-16 7.16-16 16v160c0 8.8 7.2 16 16 16h160c8.8 0 16-7.2 16-16s-7.2-16-16-16H342.6L491.3 43.3c6.3-6.24 6.3-16.36 0-22.61z" />
  </svg>
);

const SvgArrowDownLeftAndArrowUpRightToCenter = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgArrowDownLeftAndArrowUpRightToCenter;
