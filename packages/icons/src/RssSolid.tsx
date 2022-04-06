import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
    <path d="M25.57 176.1C12.41 175.4.912 185.2.052 198.4s9.173 24.65 22.39 25.5c120.1 7.875 225.7 112.7 233.6 233.6C256.9 470.3 267.4 480 279.1 480c.531 0 1.062-.031 1.594-.063 13.22-.843 23.25-12.28 22.39-25.5C294.6 310.3 169.7 185.4 25.57 176.1zM32 32C14.33 32 0 46.31 0 64s14.33 32 32 32c194.1 0 352 157.9 352 352 0 17.69 14.33 32 32 32s32-14.31 32-32C448 218.6 261.4 32 32 32zm31.1 319.9C28.63 351.9 0 380.6 0 416s28.63 64 63.1 64 64.08-28.62 64.08-64-27.81-64.1-64.08-64.1z" />
  </svg>
);

const SvgRssSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgRssSolid;
