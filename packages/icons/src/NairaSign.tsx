import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
    <path d="M243.5 255.1H352v-208c0-7.94 7.2-16 16-16s16 8.06 16 16v208h48c8.8 0 16 8.1 16 16 0 9.7-7.2 16-16 16h-48V464c0 6.1-4.5 13.2-11.2 15.3-6.7 2.1-14-.4-18-6.2L226.7 288H96v176c0 8.8-7.16 16-16 16s-16-7.2-16-16V288H16c-8.836 0-16-7.2-16-16s7.164-16 16-16h48V47.1c0-6.1 4.55-12.29 11.23-14.37 6.68-2.09 13.94.41 17.93 6.16L243.5 255.1zm22.1 32L352 412.8V287.1h-86.4zm-61.1-32L96 99.22V255.1h108.5z" />
  </svg>
);

const SvgNairaSign = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgNairaSign;
