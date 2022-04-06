import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" {...props}>
    <path d="M318 145.6a23.995 23.995 0 0 1-22 14.41l-72-.01v272c0 44.13-35.89 80-80 80H32c-17.67 0-32-14.31-32-32s14.33-32 32-32h112c8.8 0 16-7.2 16-16V160l-72-.9c-9.547 0-18.19-5.656-22-14.41s-2.08-17.99 4.41-24.99l104-112c9.498-10.23 25.69-10.23 35.19 0l104 112c6.5 7 8.2 17.1 4.4 25.9z" />
  </svg>
);

const SvgTurnUpSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgTurnUpSolid;