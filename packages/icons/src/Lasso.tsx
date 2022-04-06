import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" {...props}>
    <path d="M576 176c0 97.2-128.9 176-288 176-22.9 0-45.3-1.6-66.7-4.7 12 17.2 18.7 37.9 18.7 59.7 0 57.1-47.9 105-105 105H48c-8.84 0-16-7.2-16-16s7.16-16 16-16h87c40.3 0 73-32.7 73-73 0-27.6-15.6-52.9-40.4-65.3l-34.8-17.4C52.91 292.1 0 238.3 0 176 0 78.8 128.9 0 288 0s288 78.8 288 176zM288 320c141.4 0 256-64.5 256-144 0-79.53-114.6-144-256-144S32 96.47 32 176c0 79.5 114.6 144 256 144z" />
  </svg>
);

const SvgLasso = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgLasso;
