import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" {...props}>
    <path d="M607.1 0c18.6 0 32 14.33 32 32v88c0 17.7-13.4 32-32 32-16.8 0-32-14.3-32-32v-10.7l-35.5 36.4c13 23.1 19.5 49.9 19.5 78.3 0 77.4-54.1 141.1-128 156.8V400h16c18.6 0 32 14.3 32 32s-13.4 32-32 32h-16v16c0 17.7-13.4 32-32 32-16.8 0-32-14.3-32-32v-16h-16c-16.8 0-32-14.3-32-32s15.2-32 32-32h16v-19.2c-73-15.7-128-79.4-128-156.8 0-88.4 72.5-160 160-160 37.6 0 71.5 12.37 98.5 33.18L530.7 64h-19.6c-16.8 0-32-14.33-32-32s15.2-32 32-32h96zm-208 128c-53 0-96 42.1-96 96 0 53 43 96 96 96 53.9 0 96-43 96-96 0-53.9-42.1-96-96-96zM220.3 92.05l60.1-18.24C236.3 108.1 207.1 163.2 207.1 224c0 45.2 16.5 86.8 42.7 119.6-5.3 1.4-11.1.1-15.2-3.7l-59.5-53.8-57.7 53.8c-4.8 4.5-11.9 5.5-17.77 2.7-5.9-2.9-9.48-9-9.01-15.6l5.59-79.4-78.66-12.2c-6.47-1-11.682-5.8-13.14-12.2-1.459-6.4 1.128-13.1 6.53-16.8l65.56-45.1-39.49-69.12a16.008 16.008 0 0 1 1.38-17.91 16.007 16.007 0 0 1 17.16-5.34l76.15 23.12 29.4-73.96c2.5-6.99 8.3-10.99 14-10.99 7.5 0 13.3 4 15.8 10.99l29.4 73.96z" />
  </svg>
);

const SvgMarsAndVenusBurstSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgMarsAndVenusBurstSolid;