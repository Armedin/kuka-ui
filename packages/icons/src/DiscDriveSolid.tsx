import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M496 416h-16V96c0-35.38-28.62-64-64-64H96c-35.38 0-64 28.62-64 64v320H16c-8.875 0-16 7.1-16 16v32c0 8.9 7.125 16 15.1 16h480c8.875 0 16-7.125 16-16v-32c.9-8.9-6.2-16-15.1-16zm-240 0c-88.38 0-160-71.63-160-160S167.62 96 256 96s160 71.62 160 160-71.6 160-160 160zm0-192c-17.6 0-32 14.4-32 32s14.38 32 32 32c17.62 0 32-14.38 32-32s-14.4-32-32-32z" />
  </svg>
);

const SvgDiscDriveSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgDiscDriveSolid;
