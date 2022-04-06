import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M480 0H367.6c-21.38 0-32.09 25.85-16.97 40.97l29.56 29.56-27.11 27.11C326.1 76.85 292.7 64 256 64c-88.37 0-160 71.63-160 160 0 77.4 54.97 141.9 128 156.8v19.22h-32c-8.836 0-16 7.162-16 16v31.1c0 8.836 7.164 16 16 16h32v32c0 8.836 7.164 16 16 16h32c8.838 0 16-7.164 16-16v-32h32c8.838 0 16-7.164 16-16v-31.1c0-8.838-7.162-16-16-16h-32V380.8c73.03-14.83 128-79.37 128-156.8 0-28.38-8.018-54.65-20.98-77.77l30.45-30.45 29.56 29.56C470.1 160.5 496 149.8 496 128.4V16c0-8.836-7.2-16-16-16zM256 304c-44.11 0-80-35.89-80-80s35.89-80 80-80 80 35.89 80 80c0 44.1-35.9 80-80 80z" />
  </svg>
);

const SvgMarsAndVenusSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgMarsAndVenusSolid;
