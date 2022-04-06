import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
    <path d="M0 24C0 10.75 10.75 0 24 0s24 10.75 24 24v464c0 13.3-10.75 24-24 24S0 501.3 0 488V24zm128 120c0-26.5 21.5-48 48-48h96c26.5 0 48 21.5 48 48v224c0 26.5-21.5 48-48 48h-96c-26.5 0-48-21.5-48-48V144zM448 24v464c0 13.3-10.7 24-24 24s-24-10.7-24-24V24c0-13.25 10.7-24 24-24s24 10.75 24 24z" />
  </svg>
);

const SvgDistributeSpacingHorizontalSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgDistributeSpacingHorizontalSolid;
