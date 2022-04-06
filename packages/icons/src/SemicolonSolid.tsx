import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 192 512" {...props}>
    <path d="M68.55 295.5c-15.66 9.051-26.41 24.44-29.45 42.25l-22.57 131.7c-2.986 17.32 6.9 34.29 23.49 40.31s35.11-.648 43.99-15.83l67.69-115.4c9.119-15.58 10.81-34.25 4.652-51.21C144.1 293.5 99.82 277.4 68.55 295.5zM96 192c35.35 0 64-28.65 64-64s-28.65-64-64-64-63.1 28.65-63.1 64c-.9 35.3 27.76 64 63.1 64z" />
  </svg>
);

const SvgSemicolonSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgSemicolonSolid;
