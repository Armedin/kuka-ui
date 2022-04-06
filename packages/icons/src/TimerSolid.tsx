import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M512 256c0 141.4-114.6 256-256 256S0 397.4 0 256c0-71.6 29.46-136.4 76.84-182.86 12.62-12.36 32.86-12.16 45.26.46 12.4 12.63 12.2 32.9-.5 45.3C86.03 153.7 64 202.3 64 256c0 106 85.1 192 192 192 106 0 192-86 192-192 0-95.1-69.2-174.11-160-189.35V96c0 17.7-14.3 32-32 32s-32-14.3-32-32V32c0-17.67 14.3-32 32-32 141.4 0 256 114.6 256 256zm-239.9-17c10.2 9.4 10.2 24.6 0 33.1-8.5 10.2-23.7 10.2-33.1 0l-80-80c-9.3-8.5-9.3-23.7 0-33.1 9.4-9.3 24.6-9.3 33.1 0l80 80z" />
  </svg>
);

const SvgTimerSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgTimerSolid;
