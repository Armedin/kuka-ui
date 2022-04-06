import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 192 512" {...props}>
    <path d="M35.65 39.39c12.26-33.91 56.54-49.97 87.8-31.85 15.66 9.051 26.41 24.44 29.45 42.25l22.57 131.7c2.986 17.32-6.9 34.29-23.49 40.31s-35.11-.648-43.99-15.83L40.3 90.61c-9.12-15.58-10.8-34.25-4.65-51.22z" />
  </svg>
);

const SvgAccentGraveSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgAccentGraveSolid;
