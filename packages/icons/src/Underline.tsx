import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
    <path d="M16 32.01 64 32v218.4c0 85.15 64.14 159.6 149.1 165.3C306.3 421.8 384 347.9 384 256V32l48 .01c8.801 0 16-7.211 16-16.01 0-8.801-7.2-16-16-16L304 .01c-8.799 0-16 7.189-16 15.99 0 8.8 7.2 16 16 16h48v219.7c0 68.21-51.53 127.7-119.6 132.1C157.8 388.5 96 329.5 96 256V32h48c8.8 0 16-7.2 16-16 0-8.801-7.199-15.99-16-15.99L16 0C7.201 0 0 7.199 0 16c0 8.8 7.201 16.01 16 16.01zM432 480H16c-8.799 0-16 7.2-16 16s7.201 16 16 16h416c8.801 0 16-7.201 16-16 0-8.8-7.2-16-16-16z" />
  </svg>
);

const SvgUnderline = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgUnderline;
