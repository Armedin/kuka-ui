import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" {...props}>
    <path d="M352 416H31.1C14.33 416 0 430.3 0 447.1S14.33 480 31.1 480H352c17.7 0 32-14.3 32-32s-14.3-32-32-32zm-24-223.9h-72V64.03c0-17.69-14.33-32.02-32-32.02h-64c-17.67 0-32 14.34-32 32.02v128.1l-72-.03a24.032 24.032 0 0 0-22.05 14.51c-3.78 8.79-1.98 19.09 4.6 25.99l136 144.1c9.062 9.601 25.84 9.601 34.91 0l136-144.1a24.063 24.063 0 0 0 4.594-26C346.3 197.8 337.6 192.1 328 192.1z" />
  </svg>
);

const SvgDownToLineSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgDownToLineSolid;
