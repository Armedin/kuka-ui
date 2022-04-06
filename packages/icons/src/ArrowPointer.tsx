import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" {...props}>
    <path d="M311.9 277.1 39.87 37.99A23.926 23.926 0 0 0 24.01 32c-3.34 0-6.7.69-9.89 2.11C5.531 37.98 0 46.58 0 56.02v367.1c0 10.06 6.281 19.06 15.72 22.53a24.17 24.17 0 0 0 8.281 1.469c6.906 0 13.64-2.985 18.28-8.453l90.18-106.1 60.91 137.1C196 476.5 201.9 480 208 480a15.97 15.97 0 0 0 6.484-1.375c8.078-3.594 11.7-13.05 8.125-21.13l-61.11-137.5h134.5c9.984 0 18.92-6.172 22.45-15.52 2.651-9.375.951-19.875-6.549-27.375zm-182.8 10L32 402.2V73.71l242.8 214.3H129.1z" />
  </svg>
);

const SvgArrowPointer = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgArrowPointer;
