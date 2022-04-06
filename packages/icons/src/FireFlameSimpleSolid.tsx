import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" {...props}>
    <path d="M203.1 4.365c-6.177-5.82-16.06-5.819-22.23 0C74.52 104.5 0 234.1 0 312c0 125.9 79 200 192 200s192-74.05 192-200c0-78.1-75-207.8-180.9-307.635zM192 432c-56.5 0-96-37.76-96-91.74 0-12.47 4.207-55.32 83.87-143 6.314-6.953 17.95-6.953 24.26 0C283.8 284.9 288 327.8 288 340.3c0 53.9-39.5 91.7-96 91.7z" />
  </svg>
);

const SvgFireFlameSimpleSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgFireFlameSimpleSolid;
