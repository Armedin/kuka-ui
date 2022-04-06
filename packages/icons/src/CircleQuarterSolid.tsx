import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M31.1 255.1c-16.77 0-31.311-13.5-29.128-31C16.39 108.2 108.2 16.39 224.1 1.971c17.5-2.182 31 12.359 31 29.129v192c0 18.6-13.4 32-32 32h-192z" />
  </svg>
);

const SvgCircleQuarterSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgCircleQuarterSolid;
