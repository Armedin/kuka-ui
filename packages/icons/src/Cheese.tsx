import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="m299.9 32.01-1.5-.01c-7.125.125-14.13 2.508-19.62 7.008L12.3 246.3A31.996 31.996 0 0 0 0 271.5V448c0 17.6 14.4 32 32 32h448c17.6 0 32-14.4 32-31.1V255.1c0-119-94.9-216.84-212.1-223.09zM480 448H32V287.9h448V448zM52.12 255.9 298.8 64C400.4 69.62 480 153.8 480 255.9H52.12z" />
  </svg>
);

const SvgCheese = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgCheese;
