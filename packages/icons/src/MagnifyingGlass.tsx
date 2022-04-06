import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M507.3 484.7 365.8 343.2c31.2-36.4 49.3-83.5 49.3-135.2 0-114.9-93.13-208-208-208S0 93.13 0 208s93.12 208 207.1 208c51.68 0 98.85-18.96 135.2-50.15l141.5 141.5c4 3.05 8.1 4.65 12.2 4.65s8.188-1.562 11.31-4.688c6.29-6.212 6.29-16.412-.01-22.612zM208 384c-97.9 0-176-79-176-176S110.1 32 208 32s176 78.1 176 176-79 176-176 176z" />
  </svg>
);

const SvgMagnifyingGlass = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgMagnifyingGlass;
