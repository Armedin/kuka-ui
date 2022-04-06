import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M0 256C0 114.6 114.6 0 256 0s256 114.6 256 256-114.6 256-256 256S0 397.4 0 256zm176.4-16c17.6 0 32-14.3 32-32s-14.4-32-32-32c-17.7 0-32 14.3-32 32s14.3 32 32 32zm160-64c-17.7 0-32 14.3-32 32s14.3 32 32 32c17.6 0 32-14.3 32-32s-14.4-32-32-32zm-76.5 193.4c28.9 0 56.3 5.8 80.7 16.1 12.3 5.2 26.1-4.2 20.8-16.4-16.6-38.2-55.8-66-101.5-66-45.6 0-84.8 27.7-101.5 66-5.3 12.2 7.7 21.5 20.9 16.3 24.4-10.3 51.7-16 80.6-16z" />
  </svg>
);

const SvgFaceFrownOpenSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgFaceFrownOpenSolid;
