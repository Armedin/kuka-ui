import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" {...props}>
    <path d="M335.1 144V80H65.6l153.7 165.7c5.03 5.969 5.03 14.72 0 20.69L66.5 432H336v-64c0-8.844 7.156-15.99 16-15.99 8.8-.01 16 7.19 16 15.99v80c0 8.844-7.156 16-16 16H31.1c-6.219 0-11.91-3.625-14.5-9.281-2.625-5.625-1.75-12.31 2.281-17.06L187 256 19.78 74.34c-4.031-4.75-4.906-11.44-2.281-17.06C20.09 51.63 25.78 48 31.1 48h320c9.7 0 16.9 7.16 16.9 16v80c0 8.844-7.156 16.01-16 16.01-8.8-.01-16.9-7.21-16.9-16.01z" />
  </svg>
);

const SvgSigma = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgSigma;
