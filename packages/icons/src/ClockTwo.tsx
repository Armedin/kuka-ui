import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="m272 226.1 71.1-47.4c7.4-4.9 17.3-2.9 22.2 4.4 4.9 7.4 2.9 17.3-4.4 22.2l-96 64c-5.8 3.3-11.2 3.6-16.4.8-5.3-2.8-8.5-8.2-8.5-15v-144c0-7.9 7.2-16 16-16s16 8.1 16 16v115zM512 256c0 141.4-114.6 256-256 256S0 397.4 0 256 114.6 0 256 0s256 114.6 256 256zM256 32C132.3 32 32 132.3 32 256s100.3 224 224 224 224-100.3 224-224S379.7 32 256 32z" />
  </svg>
);

const SvgClockTwo = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgClockTwo;
