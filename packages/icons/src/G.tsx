import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
    <path d="M223.9 480C104.7 480 0 384.48 0 255.9 0 126.4 105.7 32 223.1 32c88.61 0 162.1 57.43 162.1 77.09 0 11.44-10.3 15.7-15.89 15.7-17.4 0-50.25-60.82-147.1-60.82-108.2 0-191.1 87.67-191.1 191.1 0 104.8 84.35 192 191.1 192 122.1 0 182.8-105.4 192.3-157.1l-.047-2.908h-191.4c-2.773 0-16.84-2.189-16.84-16.01 0-8.848 7.158-16.01 16-16.01h208.1C440.8 255.1 448 263.2 448 271.1 448 372.6 350.5 480 223.9 480z" />
  </svg>
);

const SvgG = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgG;
