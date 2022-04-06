import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" {...props}>
    <path d="M55.91 480C25.03 480 0 454.1 0 424.1c0-10.5 2.964-20.8 8.551-29.7L225.3 49.01C231.9 38.42 243.5 32 256 32s24.1 6.42 30.8 17.01L412.7 249.7l48.2-79c3.2-6.6 11.3-10.7 19.1-10.7 7.8 0 15 4.1 19.1 10.7l132 216.4c5.8 9.5 8.9 20.6 8.9 31.8 0 33.7-27.4 61.1-61.1 61.1H55.91z" />
  </svg>
);

const SvgMountainsSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgMountainsSolid;
