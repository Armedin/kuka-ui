import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 512" {...props}>
    <path d="M64 400c-17.67 0-32 14.32-32 31.99s14.33 32 32 32 32-14.33 32-32S81.67 400 64 400zm0-48c8.844 0 16-7.166 16-16.01v-288C80 39.146 72.844 32 64 32s-16 7.16-16 16v288c0 8.8 7.16 16 16 16z" />
  </svg>
);

const SvgExclamation = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgExclamation;
