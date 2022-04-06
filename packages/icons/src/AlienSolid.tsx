import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
    <path d="M224 0C100.2 0 0 87.99 0 232.5 0 344.2 134.2 457 194.9 502.4c17.25 12.87 41 12.87 58.25 0C313.8 456.1 448 344.2 448 232.5 448 87.99 347.8 0 224 0zm-48 319.1h-32c-44.12 0-80-35.87-80-79.1 0-8.874 7.125-15.1 16-15.1h32c44.12 0 80 35.87 80 79.99 0 8.01-7.1 14.21-16 14.21zm128 0h-32c-8.875 0-16-7.125-16-15.1 0-44.12 35.88-79.99 80-79.99h32c8.875 0 16 7.124 16 15.1 0 44.99-35.9 79.99-80 79.99z" />
  </svg>
);

const SvgAlienSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgAlienSolid;
