import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" {...props}>
    <path d="M14.89 54.93C2.692 70.21-2.372 90.22 1.044 109.9l25.21 145.2C29.55 274.1 45.44 288 63.99 288s34.44-13.9 37.71-33l25.24-145.2c3.389-19.6-1.678-39.61-13.88-54.9-24.31-30.54-73.83-30.54-98.17.03zm290.21 0c-24.34-30.57-73.86-30.57-98.2 0-12.2 15.29-17.27 35.3-13.85 54.93l25.21 145.2C221.6 274.1 237.4 288 255.1 288s34.44-13.89 37.74-32.99l25.24-145.2c4.32-19.59-.78-39.6-12.98-54.88z" />
  </svg>
);

const SvgDittoSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgDittoSolid;
