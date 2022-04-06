import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" {...props}>
    <path d="M342.3 311.6c-14-18.8-31.4-37.8-51-55.6-50.5 45.63-86.5 105-86.5 140.8 0 63.6 51.6 115.2 115.2 115.2s115.3-51.63 115.3-115.3c0-26.5-26.75-81.5-64-115.1-10.8 9.7-20.5 19.8-29 30zM320 480c-45.88 0-83.25-37.25-83.25-83.25 0-19.5 20.5-58.88 54.5-96 9.375 9.875 17.88 20 25.38 30l24.12 32.38L370.4 328c20.5 26.88 32.88 57.38 32.88 68.75C403.3 442.8 365.9 480 320 480zM608 0H32C14.4 0 0 14.4 0 32v64c0 17.6 14.4 32 32 32h576c17.6 0 32-14.4 32-32V32c0-17.6-14.4-32-32-32zm0 96H32V32h576v64zm-16 64c-8.8 0-16 7.2-16 16v304h-64V352c0-105.9-86.13-192-192-192s-192 86.13-192 192v128H64V176c0-8.8-7.16-16-16-16s-16 7.2-16 16v304c0 17.75 14.25 32 32 32h64c17.75 0 32-14.25 32-32V352c0-88.38 71.63-160 160-160s160 71.63 160 160v128c0 17.75 14.25 32 32 32h64c17.75 0 32-14.25 32-32V176c0-8.8-7.2-16-16-16z" />
  </svg>
);

const SvgFireplace = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgFireplace;