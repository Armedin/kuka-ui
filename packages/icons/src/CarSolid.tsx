import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M39.61 196.8 74.8 96.29C88.27 57.78 124.6 32 165.4 32h181.2c40.8 0 77.1 25.78 90.6 64.29l35.2 100.51c23.2 9.6 39.6 32.5 39.6 59.2v192c0 17.7-14.3 32-32 32h-32c-17.7 0-32-14.3-32-32v-48H96v48c0 17.7-14.33 32-32 32H32c-17.67 0-32-14.3-32-32V256c0-26.7 16.36-49.6 39.61-59.2zm69.49-4.8h293.8l-26.1-74.6c-4.5-12.8-16.6-21.4-30.2-21.4H165.4c-13.6 0-25.7 8.6-30.2 21.4L109.1 192zM96 256c-17.67 0-32 14.3-32 32s14.33 32 32 32c17.7 0 32-14.3 32-32s-14.3-32-32-32zm320 64c17.7 0 32-14.3 32-32s-14.3-32-32-32-32 14.3-32 32 14.3 32 32 32z" />
  </svg>
);

const SvgCarSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgCarSolid;
