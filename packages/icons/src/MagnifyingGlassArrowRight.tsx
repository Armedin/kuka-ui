import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M315.3 196.7c6.3 6.2 6.3 16.4 0 22.6l-80 80c-6.2 6.3-16.4 6.3-22.6 0-6.3-6.2-6.3-16.4 0-22.6l52.7-52.7H112c-8.8 0-16-7.2-16-16s7.2-16 16-16h153.4l-52.7-52.7c-6.3-6.2-6.3-16.4 0-22.6 6.2-6.3 16.4-6.3 22.6 0l80 80zM0 208C0 93.12 93.12 0 208 0c114.9 0 208 93.12 208 208 0 51.7-18.8 98.1-50.9 135.3l142.2 141.4c6.3 6.2 6.3 16.4 0 22.6-6.2 6.3-16.4 6.3-22.6 0L343.3 365.1C306.1 397.2 259.7 416 208 416 93.12 416 0 322.9 0 208zm208 176c97.2 0 176-78.8 176-176S305.2 32 208 32 32 110.8 32 208s78.8 176 176 176z" />
  </svg>
);

const SvgMagnifyingGlassArrowRight = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgMagnifyingGlassArrowRight;
