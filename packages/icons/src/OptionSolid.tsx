import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" {...props}>
    <path d="M448 128h160c17.69 0 32-14.31 32-32s-14.31-32-32-32H448c-17.69 0-32 14.31-32 32s14.3 32 32 32zm160 256H463.4L217 76c-6.1-7.59-15.3-12-25-12H32C14.31 64 0 78.31 0 96s14.31 32 32 32h144.6L423 436c6.1 7.6 15.3 12 25 12h160c17.69 0 32-14.31 32-32s-14.3-32-32-32z" />
  </svg>
);

const SvgOptionSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgOptionSolid;
