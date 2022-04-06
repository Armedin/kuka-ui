import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M0 256C0 114.6 114.6 0 256 0s256 114.6 256 256-114.6 256-256 256S0 397.4 0 256zm372.4 63.4c8.5-3.3 13.4-11.3 11-19.8-3.3-8.5-11.3-13.4-19.8-11l-224 64c-8.5 2.4-13.4 11.3-11 19.8 2.4 8.5 11.3 13.4 19.8 11l224-64zM176.4 176c-17.7 0-32 14.3-32 32s14.3 32 32 32c17.6 0 32-14.3 32-32s-14.4-32-32-32zm160 64c17.6 0 32-14.3 32-32s-14.4-32-32-32c-17.7 0-32 14.3-32 32s14.3 32 32 32z" />
  </svg>
);

const SvgFaceDiagonalMouthSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgFaceDiagonalMouthSolid;
