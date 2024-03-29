import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M96 0c8.8 0 16 7.164 16 16v65.6c36.5 7.41 64 39.7 64 78.4s-27.5 70.1-64 78.4V496c0 8.8-7.2 16-16 16-8.84 0-16-7.2-16-16V238.4c-36.52-8.3-64-39.7-64-78.4s27.48-70.99 64-78.4V16c0-8.836 7.16-16 16-16zm0 208c26.5 0 48-21.5 48-48s-21.5-48-48-48c-26.51 0-48 21.5-48 48s21.49 48 48 48zm240 144c0 38.7-27.5 70.1-64 78.4V496c0 8.8-7.2 16-16 16s-16-7.2-16-16v-65.6c-36.5-8.3-64-39.7-64-78.4s27.5-71 64-78.4V16c0-8.836 7.2-16 16-16s16 7.164 16 16v257.6c36.5 7.4 64 39.7 64 78.4zm-80 48c26.5 0 48-21.5 48-48s-21.5-48-48-48-48 21.5-48 48 21.5 48 48 48zm176 96c0 8.8-7.2 16-16 16s-16-7.2-16-16V270.4c-36.5-8.3-64-39.7-64-78.4s27.5-71 64-78.4V16c0-8.836 7.2-16 16-16s16 7.164 16 16v97.6c36.5 7.4 64 39.7 64 78.4s-27.5 70.1-64 78.4V496zm-16-352c-26.5 0-48 21.5-48 48s21.5 48 48 48 48-21.5 48-48-21.5-48-48-48z" />
  </svg>
);

const SvgSlidersUp = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgSlidersUp;
