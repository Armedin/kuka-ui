import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
    <path d="M48.01 351.1h351.1c41.62 0 63.49-49.63 35.37-80.38l-175.1-192.1C249.9 69.16 236.9 64.01 224 64.01c-12.94 0-25.87 5.156-35.37 15.47L12.64 271.6c-28.12 30.6-6.247 79.5 35.37 79.5zm-11.77-57.9 175.9-192.1C216.3 96.67 221.4 96 224 96c2.65 0 7.711.668 11.78 5.082l175.1 192.1c6.328 6.92 4.062 14.36 2.795 17.24-1.266 2.871-5.217 9.551-14.55 9.551H48.01c-9.326 0-13.28-6.713-14.55-9.598-1.26-2.875-3.52-10.275 2.78-17.175zM432 416H16C7.156 416 .01 423.164.01 432.01S7.156 448 16 448h416c8.844 0 15.99-7.148 15.99-15.99S440.8 416 432 416z" />
  </svg>
);

const SvgEject = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgEject;