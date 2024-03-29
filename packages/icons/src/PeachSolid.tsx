import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M338.7 112c-16.57 0-32.51 2.34-47.69 6.348C334.6 150.6 362.7 200.3 362.7 256c0 8.844-7.156 16-16 16s-16-7.156-16-16c0-83.62-75.24-144-157.3-144C77.6 112 0 183.6 0 272c0 165.1 256 240 256 240 14.35-4.504 256-85.4 256-240 0-88.4-77.6-160-173.3-160zM146.6 81.81c21.07-2.574 60.48-4.828 104.8 13.89 31.46-8.309 63.25-20.09 113.1-13.89C386.3 67.38 400 43.32 400 16V0h-63.1c-44.18 0-79.1 35.82-79.1 80C256 35.82 204.2 0 160 0h-48v16c0 27.32 13.7 51.38 34.6 65.81z" />
  </svg>
);

const SvgPeachSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgPeachSolid;
