import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M512 256c0 17.67-14.33 32-32 32H32c-17.67 0-32-14.3-32-32s14.33-32 32-32h448c17.7 0 32 14.3 32 32z" />
  </svg>
);

const SvgDashSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgDashSolid;
