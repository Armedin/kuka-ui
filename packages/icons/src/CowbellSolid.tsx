import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
    <path d="M384.3 122.4c-2.8-15.3-16.2-26.4-31.7-26.4h-16V48c0-26.5-21.63-48-48.13-48H160.1c-26.5 0-48 21.5-48 48v48H95.37c-15.51 0-28.88 11.1-31.63 26.4L.5 474.4c-3.336 18.9 11 37.6 31.62 37.6h383.8c20.65 0 34.95-18.69 31.63-37.63L384.3 122.4zM160 48h128v48H160V48z" />
  </svg>
);

const SvgCowbellSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgCowbellSolid;
