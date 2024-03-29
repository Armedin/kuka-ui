import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M319.1 128H32.02c-8.998 0-17.62 3.875-23.75 10.5-6 6.75-8.998 15.62-8.123 24.62l31.99 319.1C33.77 499.5 47.52 512 64.02 512h223.1c16.5 0 30.25-12.5 31.87-28.87l32-319.1c.875-9-2.124-17.87-8.124-24.62C337.6 131.9 328.1 128 319.1 128zm-41.4 128H74.34L68 192h216l-6.3 64zM368 0c-62.62 0-115.4 40.25-135.1 96h52.5c16.62-28.5 47.25-48 82.62-48 52.1 0 95.99 43 95.99 96 0 50.13-38.62 90.88-87.62 95.13l-4.875 48.5C449.4 285.8 512 222.4 512 144 512 64.5 447.5 0 368 0z" />
  </svg>
);

const SvgGlassCitrusSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgGlassCitrusSolid;
