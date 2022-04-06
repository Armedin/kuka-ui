import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" {...props}>
    <path d="M320 64.01v259.4c0 86.36-71.78 156.6-160 156.6S0 409.75 0 323.41V288c0-17.67 14.31-32 32-32s32 14.33 32 32v35.38c0 51.08 43.06 92.63 96 92.63s96-41.55 96-92.63V64.01c0-17.67 14.31-32 32-32s32 14.33 32 32z" />
  </svg>
);

const SvgJSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgJSolid;
