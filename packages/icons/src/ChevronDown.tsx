import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
    <path d="M4.251 181.1c3.141-3.4 7.439-6 11.749-6 3.891 0 7.781 1.406 10.86 4.25l197.1 181.1 197.1-181.1c6.5-6 16.64-5.625 22.61.906 6 6.5 5.594 16.59-.89 22.59l-208 192a15.956 15.956 0 0 1-21.72 0l-208-192C-1.344 197.7-1.75 187.6 4.25 181.1z" />
  </svg>
);

const SvgChevronDown = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgChevronDown;
