import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" {...props}>
    <path d="M614.2 334.8c-3.7-9-12.5-15.7-22.2-15.7h-48V176c0-44.1-35.9-80-80-80H336c-17.67 0-32 14.31-32 32s14.33 32 32 32h128c8.8 0 16 7.2 16 16v143.1h-48a24.007 24.007 0 0 0-16.967 40.98l80 80.02C499.7 445.7 505.9 448 512 448s12.28-2.344 16.97-7.031l80-80.02c6.83-6.849 8.93-17.149 5.23-26.149zM304 352H176c-8.8 0-16-7.2-16-16V192h48a24.007 24.007 0 0 0 16.967-40.98l-80-80.02C140.3 66.34 134.1 64 128 64s-12.3 2.34-17 7.03l-80 80.02c-6.83 6.85-8.89 17.15-5.17 26.15S38.3 192 48 192h48v144c0 44.1 35.9 80 80 80h128c17.67 0 32-14.31 32-32s-14.3-32-32-32z" />
  </svg>
);

const SvgRetweetSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgRetweetSolid;
