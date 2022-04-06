import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
    <path d="M80 320c-44.12 0-80 35.9-80 80s35.88 80 80 80 80-35.9 80-80-35.9-80-80-80zm0 128c-26.5 0-48-21.5-48-48s21.5-48 48-48 48 21.5 48 48-21.5 48-48 48zM16 32C7.156 32 0 39.16 0 48s7.156 16 16 16c220.6 0 400 179.4 400 400 0 8.844 7.156 16 16 16s16-7.156 16-16C448 225.8 254.2 32 16 32zm0 144c-8.844 0-16 7.2-16 16s7.156 16 16 16c141.2 0 256 114.8 256 256 0 8.844 7.156 16 16 16s16-7.156 16-16c0-158.8-129.2-288-288-288z" />
  </svg>
);

const SvgRss = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgRss;
