import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" {...props}>
    <path d="M495.5 223.2c-3.9.5-7.9.8-12.1.8-26 0-49.2-11.4-65.1-29-15.9 17.6-39.1 29-65.2 29s-49.3-11.4-65.2-29c-15.9 17.6-39 29-65.2 29-26 0-49.2-11.4-65.1-29-15.9 17.6-39.1 29-65.24 29-4.06 0-8.15-.3-12.12-.8-55.32-7.4-81.495-72.6-51.91-119.4l57.33-90.67C90.76 4.979 99.87 0 109.6 0h356.8c9.7 0 18.8 4.978 23.9 13.13l57.3 90.67c29.7 46.9 3.4 112-52.1 119.4zm4.2 31.7c3.4-.5 8.3-1.3 12.3-2.3V448c0 35.3-28.7 64-64 64H128c-35.34 0-64-28.7-64-64V252.6c3.87 1 7.86 1.8 11.97 2.3h.12c5.26.7 10.74 1.1 16.27 1.1 12.44 0 24.44-1.9 35.64-5.4V384h320V250.7c11.2 3.4 23.1 5.3 35.4 5.3 5.6 0 11-.4 16.3-1.1z" />
  </svg>
);

const SvgStoreSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgStoreSolid;
