import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" {...props}>
    <path d="M608 0h-32.04C525.9 0 478.1 23.91 448 64l-89.37 119.2c1.988.904 4.1 1.508 5.963 2.686l54.34 34.22c2.457 1.533 4.695 3.355 6.814 5.301l75.4-117.3C518.9 80.47 549.1 64 581.9 64H608c17.69 0 32-14.31 32-32S625.7 0 608 0zM401.9 247.1l-54.34-34.21c-7.289-4.592-16.89-2.576-21.74 4.545L256 320v-64c0-17.69-14.31-32-32-32H32c-17.69 0-32 14.3-32 32v128c0 70.69 57.31 128 128 128h26.12c54.72 0 105-27.47 134.6-73.47l117.7-168.8c5.18-7.43 3.18-18.63-4.52-22.63z" />
  </svg>
);

const SvgPipeSmokingSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgPipeSmokingSolid;
