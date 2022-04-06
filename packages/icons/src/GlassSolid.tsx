import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" {...props}>
    <path d="M375.3 10.12C369.2 3.625 360.8 0 351.9 0H32.07C23.2 0 14.8 3.625 8.674 10.12 2.676 16.495-.447 25.12.053 34L32.04 482c1.13 16.9 15.12 30 32 30h255.9c16.87 0 30.87-13.12 31.99-30l31.99-448c.48-8.88-2.62-17.5-8.62-23.88zM313 128H70.9l-4.52-64h251.2L313 128z" />
  </svg>
);

const SvgGlassSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgGlassSolid;
