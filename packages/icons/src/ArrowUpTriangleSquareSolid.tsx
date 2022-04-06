import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M151.6 41.95c-12.12-13.26-35.06-13.26-47.19 0l-87.1 96.09C4.473 151.1 5.348 171.4 18.38 183.3c13.02 11.95 33.27 11.04 45.22-1.973L96 145.9v302c0 17.8 14.3 32.1 32 32.1s32-14.33 32-32.03V145.9l32.4 35.4c11.42 12.45 31.63 14.43 45.22 1.973 13.03-11.95 13.9-32.22 1.969-45.27L151.6 41.95zM448 288H320c-17.67 0-31.1 14.33-31.1 32v128c0 17.67 14.33 32 31.1 32h128c17.67 0 32-14.33 32-32V320.9c0-18.6-14.3-32.9-32-32.9zm44.1-105.1L408.97 45.8c-11.12-18.38-38.75-18.38-49.88 0l-83.25 137.1c-11 18.25 2.75 41.12 25 41.12h166.3c22.26-.02 35.96-22.92 24.96-41.12z" />
  </svg>
);

const SvgArrowUpTriangleSquareSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgArrowUpTriangleSquareSolid;
