import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" {...props}>
    <path d="M192 32C94.75 32 16 132.2 16 256s78.75 224 176 224 176-100.2 176-224S289.2 32 192 32zm0 32c75.38 0 137.2 77.62 143.4 176H48.62C54.75 141.6 116.6 64 192 64zm0 384c-75.38 0-137.2-77.63-143.4-176h286.8c-6.2 98.4-68 176-143.4 176z" />
  </svg>
);

const SvgTheta = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgTheta;
