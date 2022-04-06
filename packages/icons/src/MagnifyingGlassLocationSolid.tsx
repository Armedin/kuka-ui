import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M236 176c0 15.46-12.54 28-28 28s-28-12.5-28-28 12.5-28 28-28 28 12.5 28 28zm264.3 324.3c-15.62 15.62-40.95 15.62-56.57 0l-119.7-119.7c-40.41 27.22-90.9 40.65-144.7 33.46-91.55-12.23-166-87.28-177.6-178.9-17.24-136.2 97.29-250.7 233.4-233.4 91.64 11.6 166.7 86.07 178.9 177.6 7.19 53.8-6.236 104.3-33.46 144.7l119.7 119.7c15.63 15.54 15.63 40.94.03 56.54zM294.1 182.2c0-47.7-38.5-86.2-87-86.2-46.7 0-85.2 38.5-85.2 86.2 0 38.35 56.29 108.5 77.87 134 2.03 2.3 4.93 3.8 7.33 3.8 3.207 0 6.26-1.459 8.303-3.791C237.8 290.7 294.1 220.5 294.1 182.2z" />
  </svg>
);

const SvgMagnifyingGlassLocationSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgMagnifyingGlassLocationSolid;
