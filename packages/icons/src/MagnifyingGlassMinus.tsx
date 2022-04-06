import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M288 192H128c-8.8 0-16 7.2-16 16s7.2 16 16 16h160c8.844 0 16-7.156 16-16s-7.2-16-16-16zm219.3 292.7L365.8 343.2C397 306.8 416 259.7 416 208 416 93.13 322.9 0 208 0S0 93.13 0 208s93.13 208 208 208c51.68 0 98.85-18.96 135.2-50.15l141.5 141.5c3.1 3.05 7.2 4.65 11.3 4.65s8.188-1.562 11.31-4.688c6.29-6.212 6.29-16.412-.01-22.612zM208 384c-97.9 0-176-79-176-176S110.1 32 208 32s176 78.1 176 176-79 176-176 176z" />
  </svg>
);

const SvgMagnifyingGlassMinus = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgMagnifyingGlassMinus;
