import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
    <path d="M448 352c0 8.844-7.156 15.1-16 15.1H165.9L93.14 472.2c-3.08 5.4-8.08 7.8-13.14 7.8-3.156 0-6.344-.906-9.094-2.844-7.281-5.031-9.094-14.1-4.062-22.25l60.17-86.9H16c-8.844 0-16-7.156-16-15.1 0-8.844 7.156-15.99 16-15.99l133.2-.005 110.8-159.1L16 176c-8.844 0-16-7.158-16-16 0-8.844 7.156-15.1 16-15.1h266.1l72.76-105.1c5-7.312 15.09-9.094 22.25-4.062 7.281 5.031 9.094 14.1 4.062 22.25l-60.17 86.9H432c8.844 0 16 7.156 16 15.1 0 8.844-7.156 16-16 16l-133.2-.002-110.8 159.1L432 336c8.8 0 16 7.2 16 16z" />
  </svg>
);

const SvgNotEqual = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgNotEqual;
