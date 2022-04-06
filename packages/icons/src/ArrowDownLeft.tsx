import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" {...props}>
    <path d="M315.3 122.6 54.43 383.4 240 384c8.9 0 16 7.2 16 16-.9 8.9-7.2 16-16 16l-224-.656C7.141 415.3 0 408.2 0 399.3V176c0-8.8 7.156-16 16-16s16 7.2 16 16v184.6L292.7 99.9c6.25-6.25 16.38-6.25 22.62 0s6.28 16.4-.02 22.7z" />
  </svg>
);

const SvgArrowDownLeft = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgArrowDownLeft;
