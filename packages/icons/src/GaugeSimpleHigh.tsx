import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M192 352c0-35.3 28.7-64 64-64 5.3 0 10.4.6 15.3 1.8l82.6-153.4c4.2-7.8 13.9-10.7 21.7-6.5 7.8 4.2 10.7 13.9 6.5 21.7L299.5 305c12.6 11.7 20.5 28.4 20.5 47 0 35.3-28.7 64-64 64s-64-28.7-64-64zm64 32c17.7 0 32-14.3 32-32s-14.3-32-32-32-32 14.3-32 32 14.3 32 32 32zM0 256C0 114.6 114.6 0 256 0s256 114.6 256 256-114.6 256-256 256S0 397.4 0 256zm256 224c123.7 0 224-100.3 224-224S379.7 32 256 32 32 132.3 32 256s100.3 224 224 224z" />
  </svg>
);

const SvgGaugeSimpleHigh = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgGaugeSimpleHigh;
