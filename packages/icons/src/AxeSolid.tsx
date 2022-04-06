import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" {...props}>
    <path d="m240.6 203.6 67.88 67.88-231.2 231.2c-12.5 12.5-32.76 12.5-45.26.001l-22.63-22.63c-12.5-12.5-12.5-32.76 0-45.26L240.6 203.6zM640 160v31.1c0 123.7-100.3 224-224 224l-32 .9-.003-114.3L233.4 151.1c-12.5-12.5-12.5-32.76.002-45.25l96.5-96.49c6.25-6.25 14.44-9.375 22.63-9.375s16.38 3.125 22.63 9.375l29.81 29.81 29.82-29.82c12.5-12.5 32.76-12.5 45.26 0l22.62 22.62c12.5 12.5 12.5 32.76 0 45.26l-29.82 29.82 52.94 52.94L640 160zm-67.2 64h-37.94c-16.26 39.3-47.56 70.6-86.86 86.8v37.95C510.6 336 560 286.6 572.8 224z" />
  </svg>
);

const SvgAxeSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgAxeSolid;
