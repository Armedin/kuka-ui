import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M0 256C0 114.6 114.6 0 256 0s256 114.6 256 256-114.6 256-256 256S0 397.4 0 256zm159.3 132.7c12.2-39.3 50.6-68.7 96.7-68.7s84.5 29.4 96.7 68.7c2.6 8.5 11.6 13.2 20 10.6 8.5-2.6 13.2-11.6 10.6-20-16.5-53.2-67.5-92.2-127.3-92.2-59.7 0-110.8 39-127.3 92.2-2.6 8.4 2.1 17.4 10.6 20 8.4 2.6 17.4-2.1 20-10.6zM176.4 176c-17.7 0-32 14.3-32 32s14.3 32 32 32c17.6 0 32-14.3 32-32s-14.4-32-32-32zm160 64c17.6 0 32-14.3 32-32s-14.4-32-32-32c-17.7 0-32 14.3-32 32s14.3 32 32 32z" />
  </svg>
);

const SvgFaceFrownSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgFaceFrownSolid;
