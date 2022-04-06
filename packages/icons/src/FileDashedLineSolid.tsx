import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" {...props}>
    <path d="M243.6 264c-5.25 0-10.25 2.001-13.88 5.75-4.62 3.65-5.72 8.65-5.72 13.85v8.75c0 5.25 1.1 10.25 5.75 13.88C233.4 310 238.4 312 243.6 312h88.75c5.25 0 10.25-1.999 13.88-5.75 2.87-3.65 5.77-8.65 5.77-13.85v-8.8c0-5.25-2-10.25-5.75-13.88C342.6 266 337.6 264 332.4 264h-88.8zM160 64h176v64c0 8.875 7.125 16 16 16h64v72h64v-84c0-12.75-5.125-25-14.12-33.1L382 15.02C373 5.125 360.9 0 348.1 0H144c-26.5.125-48 21.62-48 48.13V216h64V64zm0 232v-16c0-8.875-7.125-16-16-16H16c-8.875 0-16 7.1-16 16v16c0 8.875 7.125 16 16 16h128c8.9 0 16-7.1 16-16zm256 152H160v-88H96v104c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48V360h-64v88zm144-184H432c-8.875 0-16 7.125-16 16v16c0 8.875 7.125 16 16 16h128c8.875 0 16-7.125 16-16v-16c0-8.9-7.1-16-16-16z" />
  </svg>
);

const SvgFileDashedLineSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgFileDashedLineSolid;
