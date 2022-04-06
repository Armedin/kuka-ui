import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 512" {...props}>
    <path d="M32 512c-17.67 0-32-14.33-32-32V32C0 14.33 14.33 0 32 0s32 14.33 32 32v448c0 17.7-14.33 32-32 32z" />
  </svg>
);

const SvgPipeSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgPipeSolid;
