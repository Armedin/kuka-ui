import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" {...props}>
    <path d="M192.1 477.3c-9.5-3.625-16.88-11.38-21.12-20.63L89.1 281.3c-1.6-5.7-7.35-9.3-13.6-9.3H16c-8.8 0-16-7.2-16-16s7.2-16 16-16h59.5c18.62 0 35.75 11 43.63 27.88l81.25 176.3c2.375 5.125 11.12 4.375 12.75-1.125l101.1-375.5C319.8 46.63 338.9 32 360.5 32H560c8.8 0 16 7.2 16 16s-7.2 16-16 16H360.5c-7.25 0-13.5 4.875-15.38 11.88L244 451.3c-5.9 21.5-29 34.7-51.9 26z" />
  </svg>
);

const SvgSquareRoot = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgSquareRoot;
