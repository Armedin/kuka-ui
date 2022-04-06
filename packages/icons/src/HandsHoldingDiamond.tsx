import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" {...props}>
    <path d="M438.1 104 343.95 9.94C337.5 3.529 329 0 319.1 0s-16.7 3.529-23.2 9.939L201.9 104c-13.23 13.22-13.23 34.76 0 47.98l94.15 94.08c6.65 6.64 15.35 9.94 24.05 9.94s17.4-3.312 24-9.924l94.01-94.08C451.3 138.8 451.3 117.2 438.1 104zm-22.7 25.4-94.01 94.08-2.69-.08-94.2-94c-.6-.7-.6-2.1.1-2.8L319.9 32l1.383.594 94.14 94.06c.677.646.677 2.046-.023 2.746zm-195 119.3c-14-19.1-49.1-31.4-74.4-3.9-15.6 16.9-15.9 42.9-2.5 61.4l28.59 39.24c6.492 8.873-6.492 19.12-13.61 10.75L96.56 282.8l-.68-169.1c0-25.99-21.22-49.24-47.19-49.61C21.85 63.63 0 85.25 0 111.1l.688 202.3c0 10.87 3.744 21.49 10.49 29.99l106.9 133.7c4.386 5.512 7.52 13.7 9.202 21.68 1.52 7.217 8.18 12.18 15.55 12.18 10.18 0 17.77-9.424 15.64-19.38-2.7-12.67-7.923-25.21-15.43-34.47L36.14 323.4c-2.25-1.8-3.49-5.5-3.49-9.1l-.69-203.2c0-20.99 31.96-21.62 31.96.75l.685 181.6 64.54 77.48c36.83 44.24 96.63-2.623 70.66-42.36-.124-.25-.374-.5-.5-.75L168.7 286.4c-4.619-6.498-4.119-16.75 3.496-22.24 6.992-5.123 17.1-3.873 22.47 3.5l42.32 58.36c12.61 16.87 19.47 37.37 19.47 57.98v112c.044 8.8 7.144 16 15.944 16s16.06-7.162 16.06-15.92v-112c0-27.74-8.99-54.61-25.59-76.85L220.4 248.7zm418.8-137.6c0-26.74-21.85-48.36-48.69-47.99-25.97.375-47.19 23.74-47.19 49.74l.685 168.9-61.92 73.36c-7.115 8.371-20.1-1.75-13.61-10.75L497.1 306.1c13.36-18.49 13.11-44.61-2.498-61.36-25.47-27.37-60.55-15.25-74.4 3.998L377.8 307.1c-16.6 22.12-25.59 49.11-25.59 76.85v112c0 8.756 7.156 15.92 15.9 15.92 8.746 0 15.96-7.161 15.96-15.92l.1-112c0-20.62 6.742-41.11 19.48-57.98l42.32-58.36c5.369-7.373 15.36-8.748 22.35-3.5 7.863 5.623 8.363 15.75 3.494 22.24l-30.46 42.24c-.25.25-.5.5-.5.75-26.09 39.74 33.83 86.72 70.66 42.36l64.54-77.48-.686-181.6c0-22.37 31.96-21.74 31.96-.75l.688 202.3c0 3.623-1.248 7.248-3.496 9.996l-106.9 133.7c-7.381 9.234-12.65 21.8-15.38 34.45-2.156 9.963 5.398 19.41 15.58 19.41 7.383 0 14.07-4.984 15.56-12.22 1.654-8.027 4.727-16.13 9.215-21.64l106.9-133.7C636.3 335.7 640 325.2 640 314.2l-.8-203.1z" />
  </svg>
);

const SvgHandsHoldingDiamond = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgHandsHoldingDiamond;
