import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
    <path d="M128 160v96c0 53 42.1 96 96 96 53 0 96-43 96-96v-96h128v96c0 123.7-100.3 224-224 224S0 379.7 0 256v-96h128zM0 64c0-17.67 14.33-32 32-32h64c17.7 0 32 14.33 32 32v64H0V64zm320 0c0-17.67 14.3-32 32-32h64c17.7 0 32 14.33 32 32v64H320V64z" />
  </svg>
);

const SvgMagnetSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgMagnetSolid;
