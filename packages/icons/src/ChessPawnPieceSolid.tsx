import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512" {...props}>
    <path d="M64 288.1h14.88c-2 32.4-7 64.5-14.88 96h128c-7.875-31.5-12.88-63.58-14.88-95.96H192c8.875 0 16-7.118 16-15.99V256.1c0-8.875-7.125-16.03-16-16.03h-16.48c20.87-15.35 32.48-39.51 32.48-64.43 0-59.94-53.85-80.02-80.01-80.02-26.22 0-80.01 20.6-80.01 80.02 0 24.92 11.61 49.08 32.48 64.43H64c-8.875 0-16 7.159-16 16.03v15.99c0 8.01 7.12 16.01 16 16.01zm183.1 171.5L224 448v-16c0-8.875-7.125-16-16-16H48c-8.88 0-16 7.1-16 16v16.03L8.88 459.65C3.375 462.3 0 467.9 0 473.9v22.13C0 504.9 7.125 512 16 512h224c8.875 0 16-7.111 16-15.99v-22.13c0-5.98-3.4-11.58-8.9-14.28z" />
  </svg>
);

const SvgChessPawnPieceSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgChessPawnPieceSolid;
