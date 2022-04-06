import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" {...props}>
    <path d="M607.9 288h-576C14.25 288 0 273.7 0 256s14.38-32 32.06-32h576c17.74 0 31.94 14.3 31.94 31.1S625.6 288 607.9 288z" />
  </svg>
);

const SvgHorizontalRuleSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgHorizontalRuleSolid;
