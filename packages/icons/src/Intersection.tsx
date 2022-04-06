import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" {...props}>
    <path d="M384 224v240c0 8.844-7.156 16-16 16s-16-7.2-16-16V224c0-88.22-71.78-160-160-160S32 135.8 32 224v240c0 8.8-7.16 16-16 16s-16-7.2-16-16V224C0 118.1 86.13 32 192 32s192 86.1 192 192z" />
  </svg>
);

const SvgIntersection = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgIntersection;
