import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M239.5 5.018c10.6-3.912 22.4-3.912 33 0l208 76.262c18.9 6.94 31.5 24.92 31.5 45.12v259.3c0 20.1-12.6 38.1-31.5 45l-208 75.4c-10.6 4.8-22.4 4.8-33 0L31.48 430.7C12.57 423.8 0 405.8 0 385.7V126.4c0-20.2 12.57-38.18 31.48-45.12L239.5 5.018zm22 30.042c-4.4-1.3-7.5-1.3-11 0L44.14 110.7 256 193.1l211.9-82.4-206.4-75.64zM42.49 400.7 240 473.1V222L32 140.3v245.4c0 6.7 4.19 12.7 10.49 15zM272 473.1l197.5-72.4c6.3-2.3 10.5-8.3 10.5-15V140.3L272 222v251.1z" />
  </svg>
);

const SvgCube = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgCube;
