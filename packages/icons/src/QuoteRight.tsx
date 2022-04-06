import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
    <path d="M352 96c-53.02 0-96 42.98-96 96s42.98 96 96 96c24.7 0 46.99-9.59 64-24.91V288c0 52.94-43.06 96-96 96h-16c-8.844 0-16 7.156-16 16s7.156 16 16 16h16c70.58 0 128-57.42 128-128v-96c0-53.9-43-96-96-96zm0 160c-35.29 0-64-28.71-64-64s28.71-64 64-64 64 28.71 64 64-28.7 64-64 64zM96 96c-53.02 0-96 42.1-96 96s42.98 96 96 96c24.7 0 46.99-9.59 64-24.91V288c0 52.94-43.06 96-96 96H48c-8.84 0-16 7.2-16 16s7.16 16 16 16h16c70.58 0 128-57.42 128-128v-96c0-53.9-43-96-96-96zm0 160c-35.29 0-64-28.7-64-64s28.71-64 64-64 64 28.71 64 64-28.7 64-64 64z" />
  </svg>
);

const SvgQuoteRight = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgQuoteRight;
