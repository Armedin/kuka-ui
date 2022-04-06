import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M0 288v159.1C0 465.6 14.38 480 32 480h448c17.62 0 32-14.38 32-31.1V288H0zM299.9 32.01c-7.75-.25-15.25 2.25-21.12 6.1L0 255.1l512-.012C512 136.1 417.1 38.26 299.9 32.01z" />
  </svg>
);

const SvgCheeseSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgCheeseSolid;
