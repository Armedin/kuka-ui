import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" {...props}>
    <path d="M96 0c17.7 0 32 14.33 32 32v96H64V32C64 14.33 78.33 0 96 0zm192 0c17.7 0 32 14.33 32 32v96h-64V32c0-17.67 14.3-32 32-32zm64 160c17.7 0 32 14.3 32 32s-14.3 32-32 32v32c0 77.4-55 141.1-128 156.8V512h-64v-99.2C86.97 397.1 32 333.4 32 256v-32c-17.67 0-32-14.3-32-32s14.33-32 32-32h320z" />
  </svg>
);

const SvgPlugSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgPlugSolid;
