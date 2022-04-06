import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M16 160h441.4L356.7 260.7c-6.25 6.25-6.25 16.38 0 22.62s16.38 6.25 22.62 0l128-128C510.4 152.2 512 148.1 512 144s-1.562-8.188-4.688-11.31l-128-128c-6.25-6.25-16.38-6.25-22.62 0s-6.25 16.38 0 22.62L457.4 128H16c-8.844 0-16 7.2-16 16s7.156 16 16 16zm480 192H54.63l100.7-100.7c6.25-6.25 6.25-16.38 0-22.62s-16.38-6.25-22.62 0l-128 128C1.563 359.8 0 363.9 0 368s1.562 8.188 4.688 11.31l128 128c6.25 6.25 16.38 6.25 22.62 0s6.25-16.38 0-22.62L54.63 384H496c8.844 0 16-7.156 16-16s-7.2-16-16-16z" />
  </svg>
);

const SvgArrowRightArrowLeft = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgArrowRightArrowLeft;
