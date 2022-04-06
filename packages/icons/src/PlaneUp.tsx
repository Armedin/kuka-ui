import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M256 0c48 0 80 74.04 80 112.1v42l160 100c8.1 6 16 16 16 28v65.1c0 10-5 20-13 26s-19 8-28 5l-135-43v41l51 40c8 6 13 15 13 25v39c0 10-5 20-13 25-8 6.1-18.9 8.1-27 6.1l-104-31.1-104 30c-10 3.1-20 1.1-28-5-8-6-12-15-12-25v-40c0-10 4-19 12-25l52-39v-41l-135 43c-10 3-21 1-29-5s-12-16-12-26v-65.1c0-11 6-23 16-28l160-101v-41C176 74.04 207 0 256 0zm0 33.02c-23 0-48 48.02-48 80.08v59l-176 110v65.1l176-55.1v100.1l-64 48v40l112-32 112 32v-40l-64-48V292.1l176 55.1v-65.1l-176-111v-59c0-31.06-26-79.08-48-79.08z" />
  </svg>
);

const SvgPlaneUp = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgPlaneUp;
