import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" {...props}>
    <path d="M257.4 64c-6.75 0-13.41 2.344-18.91 6.875L64 214.2V80c0-8.84-7.16-16-16-16s-16 7.16-16 16v352c0 8.8 7.16 16 16 16s16-7.2 16-16V297.8l174.5 143.3c4.6 4.6 12.1 6.9 18.9 6.9 10.3 0 30.6-8.1 30.6-32.9V96.03C288 72.13 267.7 64 257.4 64zM256 416.4 64.52 256 256 95.59V416.4z" />
  </svg>
);

const SvgBackwardStep = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgBackwardStep;
