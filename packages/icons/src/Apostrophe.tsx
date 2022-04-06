import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 192 512" {...props}>
    <path d="M112 32c-44.18 0-80 35.82-80 80 0 44.2 35.82 80 80 80 18.1 0 34.6-6.232 48-16.36V208c0 44.1-35.9 80-80 80-8.84 0-16 7.2-16 16s7.16 16 16 16c61.75 0 112-50.25 112-112v-96c0-44.18-35.8-80-80-80zm0 128c-26.47 0-48-21.5-48-48s21.53-48 48-48 48 21.53 48 48-21.5 48-48 48z" />
  </svg>
);

const SvgApostrophe = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgApostrophe;
