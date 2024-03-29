import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M256 360c-13.25 0-23.1 10.74-23.1 24 0 13.25 10.75 24 23.1 24 13.25 0 23.1-10.75 23.1-24 .9-13.3-9.8-24-23.1-24zm0-40c8.843 0 15.1-7.156 15.1-16V160c0-8.844-7.155-16-15.1-16s-16 7.2-16 16v144c0 8.8 7.2 16 16 16zm248.3 77.3L304.5 59.38C294.4 42.27 276.2 32.03 256 32c-20.2 0-38.3 10.22-48.5 27.36l-199.9 338c-10.05 16.97-10.2 37.34-.422 54.5C17.29 469.5 35.55 480 56.1 480H456c20.51 0 38.75-10.53 48.81-28.17 9.79-17.13 9.59-37.53-.51-54.53zm-28.2 37.8c-3.4 8.4-11.3 12.9-21 12.9h-399c-8.906 0-16.78-4.484-21.08-12-4.078-7.156-4.015-15.3.156-22.36L235.1 75.66C239.4 68.36 247.2 64 256 64c0 0-.016 0 0 0 8.765.016 16.56 4.359 20.86 11.64l199.9 338c3.34 7.06 4.34 15.16-.66 21.46z" />
  </svg>
);

const SvgTriangleExclamation = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgTriangleExclamation;
