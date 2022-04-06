import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" {...props}>
    <path d="M234.8 36.25c3.438 3.141 5.156 7.438 5.156 11.75 0 3.891-1.406 7.781-4.25 10.86L53.77 256l181.1 197.1c6 6.5 5.625 16.64-.906 22.61-6.5 6-16.59 5.594-22.59-.89l-192-208a15.956 15.956 0 0 1 0-21.72l192-208c6.826-6.44 16.926-6.85 23.426-.85z" />
  </svg>
);

const SvgChevronLeft = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgChevronLeft;
