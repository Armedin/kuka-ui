import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" {...props}>
    <path d="M320 0H64C37.49 0 16 21.49 16 48v416c0 26.5 21.49 48 48 48h256c26.51 0 48-21.49 48-48V48c0-26.51-21.5-48-48-48zM192 464c-17.75 0-32-14.25-32-32s14.25-32 32-32 32 14.25 32 32-14.2 32-32 32z" />
  </svg>
);

const SvgMobileButtonSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgMobileButtonSolid;
