import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" {...props}>
    <path d="M192 0c17.7 0 32 14.33 32 32v34.66c30.9 5.18 59.2 17.73 83.2 35.74 14.2 10.6 17 30.7 6.4 44.8-11.5 14.2-30.7 17-44.8 6.4-21.4-16.1-47.9-25.6-76.8-25.6-70.7 0-128 57.3-128 128s57.3 128 128 128c28.9 0 55.4-9.5 76.8-25.6 14.1-10.6 33.3-7.8 44.8 6.4 10.6 14.1 7.8 33.3-6.4 44.8-24 18-52.3 30.6-83.2 35.7V480c0 17.7-14.3 32-32 32s-32-14.3-32-32v-34.7C69.19 430.1 0 351.1 0 256 0 160.9 69.19 81.89 160 66.66V32c0-17.67 14.3-32 32-32z" />
  </svg>
);

const SvgCentSignSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgCentSignSolid;
