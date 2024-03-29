import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" {...props}>
    <path d="M480 80c0-44.18 35.8-80 80-80s80 35.82 80 80c0 44.2-35.8 80-80 80s-80-35.8-80-80zm80 48c26.5 0 48-21.5 48-48 0-26.51-21.5-48-48-48s-48 21.49-48 48c0 26.5 21.5 48 48 48zM55.91 512C25.03 512 0 486.1 0 456.1c0-10.5 2.964-20.8 8.551-29.7L225.3 81.01C231.9 70.42 243.5 64 256 64s24.1 6.42 30.8 17.01L412.7 281.7l48.2-79c3.2-6.6 11.3-10.7 19.1-10.7 7.8 0 15 4.1 19.1 10.7l132 216.4c5.8 9.5 8.9 20.6 8.9 31.8 0 33.7-27.4 61.1-61.1 61.1H55.91zM431.7 312l71.7 114.4c5.6 8.9 8.6 19.2 8.6 29.7 0 8.5-1.9 16.7-5.4 23.9h72.3c15.2 0 29.1-13.9 29.1-29.1 0-5.4-1.5-10.6-4.3-15.2L480 232.9 431.7 312zM480 456.1c0-4.5-1.3-8.9-3.7-12.7L259.6 98.02c-.7-1.26-2.1-2.02-3.6-2.02s-2.9.76-3.6 2.02L35.66 443.4c-2.39 3.8-3.66 8.2-3.66 12.7 0 13.2 10.71 23.9 23.91 23.9H456.1c13.2 0 23.9-10.7 23.9-23.9z" />
  </svg>
);

const SvgMountainSun = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgMountainSun;
