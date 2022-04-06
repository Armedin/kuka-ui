import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="m272 203.2 34.7-52.1c4.9-7.3 14.8-9.3 22.2-4.4 7.3 4.9 9.3 14.8 4.4 22.2l-64 96c-3.9 5.8-11.2 8.5-17.9 6.4-6.8-2-12.3-8.2-12.3-15.3V112c0-8.8 8.1-16 16-16 9.7 0 16.9 7.2 16.9 16v91.2zM512 256c0 141.4-114.6 256-256 256S0 397.4 0 256 114.6 0 256 0s256 114.6 256 256zM256 32C132.3 32 32 132.3 32 256s100.3 224 224 224 224-100.3 224-224S379.7 32 256 32z" />
  </svg>
);

const SvgClockOne = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgClockOne;
