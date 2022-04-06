import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M464 288H48c-26.5 0-48 21.5-48 48v96c0 26.5 21.5 48 48 48h416c26.5 0 48-21.5 48-48v-96c0-26.5-21.5-48-48-48zM320 416c-17.62 0-32-14.38-32-32s14.38-32 32-32 32 14.38 32 32-14.4 32-32 32zm96 0c-17.62 0-32-14.38-32-32s14.38-32 32-32 32 14.38 32 32-14.4 32-32 32zm48-384H48C21.5 32 0 53.5 0 80v192.4C13.41 262.3 29.92 256 48 256h416c18.08 0 34.59 6.254 48 16.41V80c0-26.5-21.5-48-48-48z" />
  </svg>
);

const SvgHardDriveSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgHardDriveSolid;
