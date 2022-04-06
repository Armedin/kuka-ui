import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" {...props}>
    <path d="M432 96h192c8.8 0 16-7.16 16-16s-7.2-16-16-16H432c-8.8 0-16 7.16-16 16s7.2 16 16 16zm192 320H494.3c-14.47 0-28.03-6.406-37.19-17.59L207.6 93.34C192.3 74.69 169.8 64 145.7 64H16C7.156 64 0 71.16 0 80s7.156 16 16 16h129.7c14.47 0 28.03 6.406 37.19 17.59l249.6 305.1C447.7 437.3 470.3 448 494.3 448H624c8.844 0 16-7.156 16-16s-7.2-16-16-16z" />
  </svg>
);

const SvgOption = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgOption;
