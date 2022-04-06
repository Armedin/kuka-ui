import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M272 256c0 5.3-2.7 10.3-7.1 13.3l-96 64c-7.4 4.9-17.3 2.9-22.2-4.4-4.9-7.4-2.9-17.3 4.4-22.2l88.9-59.3V112c0-8.8 7.2-16 16-16s16 7.2 16 16v144zm240 0c0 141.4-114.6 256-256 256S0 397.4 0 256 114.6 0 256 0s256 114.6 256 256zM256 32C132.3 32 32 132.3 32 256s100.3 224 224 224 224-100.3 224-224S379.7 32 256 32z" />
  </svg>
);

const SvgClockEight = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgClockEight;
