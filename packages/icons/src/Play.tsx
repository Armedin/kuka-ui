import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" {...props}>
    <path d="M24.52 38.13a48.019 48.019 0 0 1 48.51.91L361 215c14.3 8.8 23 24.3 23 41s-8.7 32.2-23 40.1l-287.97 176c-14.82 9.9-33.37 10.3-48.51 1.8A48.02 48.02 0 0 1 0 432V80a48.02 48.02 0 0 1 24.52-41.87zm31.82 28.22a15.998 15.998 0 0 0-16.17-.31A16.029 16.029 0 0 0 32 80v352c0 5.8 3.13 11.1 8.17 13.1 5.05 3.7 11.24 3.6 16.17.6l287.96-176c4.8-3 7.7-8.1 7.7-13.7s-2.9-10.7-7.7-13.7L56.34 66.35z" />
  </svg>
);

const SvgPlay = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgPlay;
