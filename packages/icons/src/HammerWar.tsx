import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" {...props}>
    <path d="M352.1 32.02c-1.75 0-3.612.107-5.362.482L208 55.59V16c0-8.844-7.156-16-15.1-16S176 7.156 176 16v39.59L37.25 32.5c-1.75-.37-3.61-.48-5.36-.48C14.64 32.02 0 46 0 64v192c0 18 14.6 31.98 31.97 31.98 1.75 0 3.53-.107 5.28-.482l154.8-25.75 154.8 25.75c1.75.375 3.444.482 5.32.482 17.25 0 31.93-13.98 31.93-31.98V64c-.1-18-14.7-31.98-32-31.98zM352 256l-160-26.62L32 256V64l160 26.62L352 64v192zm-160 32c-8.8 0-16 7.2-16 16v192c0 8.844 7.156 16 15.1 16s16-7.156 16-16l.9-192c0-8.8-7.2-16-16-16z" />
  </svg>
);

const SvgHammerWar = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgHammerWar;
