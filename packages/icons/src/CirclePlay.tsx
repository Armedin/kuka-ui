import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M356.5 235.5c7.1 4.4 11.5 12.1 11.5 20.5s-4.4 16.1-11.5 20.5l-144 88c-7.4 4.5-16.7 4.7-24.2.4-7.6-4.2-12.3-12.2-12.3-20.9V167.1c0-7.8 4.7-15.8 12.3-20 7.5-4.3 16.8-5 24.2.4l144 88zM208 182.3v147.4l120.7-74.6L208 182.3zM0 256C0 114.6 114.6 0 256 0s256 114.6 256 256-114.6 256-256 256S0 397.4 0 256zm256 224c123.7 0 224-100.3 224-224S379.7 32 256 32 32 132.3 32 256s100.3 224 224 224z" />
  </svg>
);

const SvgCirclePlay = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgCirclePlay;
