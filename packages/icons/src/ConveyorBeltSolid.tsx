import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" {...props}>
    <path d="M160 256h320c17.6 0 32-14.4 32-32V32c0-17.6-14.4-32-32-32h-96v128l-64-32-64 32V0h-96.9c-16.7 0-32 14.4-32 32l.9 192c0 17.6 14.4 32 32 32zm384 64H96c-53 0-96 43-96 96s43 96 96 96h448c53 0 96-43 96-96s-43-96-96-96zM128 448c-17.75 0-32-14.25-32-32s14.25-32 32-32 31.1 14.25 31.1 32-13.3 32-31.1 32zm191.1 0c-17.75 0-32-14.25-32-32s14.25-32 32-32 32 14.25 32 32-13.3 32-32 32zm192.9 0c-17.75 0-32-14.25-32-32s14.2-32 32-32c17.75 0 32 14.25 32 32s-14.2 32-32 32z" />
  </svg>
);

const SvgConveyorBeltSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgConveyorBeltSolid;
