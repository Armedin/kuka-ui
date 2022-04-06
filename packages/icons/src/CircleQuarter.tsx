import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M224.1 1.971c17.5-2.182 31 12.359 31 29.129v192c0 18.6-13.4 32-32 32h-192c-16.77 0-31.311-13.5-29.128-31C16.39 108.2 108.2 16.39 224.1 1.971zM34.26 223.1H223.1V34.26C125.9 48.28 48.28 125.9 34.26 223.1z" />
  </svg>
);

const SvgCircleQuarter = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgCircleQuarter;
