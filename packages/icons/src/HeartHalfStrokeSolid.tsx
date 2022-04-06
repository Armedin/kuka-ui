import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M119.4 44.1c44.7-7.59 91.9 7.27 123.7 39.89l12 12.01 12-11.98C300.6 51.37 347 36.51 392.6 44.1c68.9 11.48 119.4 71.1 119.4 141v5.8c0 41.5-17.2 81.2-47.6 109.5L283.7 469.1c-7.5 7-17.4 10.9-27.7 10.9s-20.2-3.9-27.7-10.9L47.59 300.4C17.23 272.1 0 232.4 0 190.9v-5.8C0 115.2 50.52 55.58 119.4 44.09v.01zm135.7 142.4v220.9l165.6-153.8a85.66 85.66 0 0 0 27.3-62.7v-5.8c0-38.6-27.9-71.5-66-77.9-25.1-4.2-50.7 4-68.8 22.1l-58.1 57.2z" />
  </svg>
);

const SvgHeartHalfStrokeSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgHeartHalfStrokeSolid;
