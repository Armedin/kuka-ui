import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" {...props}>
    <path d="M558.1 164.1c-9.6-2.7-19.7-4.1-30.1-4.1-38.7 0-72.8 19.6-92.9 49.5-6.2-4.2-11.9-9-16.8-14.5-15.9 17.6-39.1 29-65.2 29s-49.3-11.4-65.2-29c-15.9 17.6-39 29-65.2 29-26 0-49.2-11.4-65.1-29-15.9 17.6-39.1 29-65.24 29-4.06 0-8.15-.3-12.12-.8-55.32-7.4-81.496-72.6-51.91-119.4l57.33-90.67C90.76 4.979 99.87 0 109.6 0h356.8c9.7 0 18.8 4.978 23.9 13.13l57.3 90.67c11.9 18.8 14.8 40.5 10.5 60.3zM128 384h256v96c0 11.7 3.1 22.6 8.6 32H128c-35.35 0-64-28.7-64-64V252.6c3.87 1 7.86 1.8 11.97 2.3h.12c5.26.7 10.74 1.1 16.27 1.1 12.44 0 24.44-1.9 35.64-5.4V384zm400-192c44.2 0 80 35.8 80 80v48c17.7 0 32 14.3 32 32v128c0 17.7-14.3 32-32 32H448c-17.7 0-32-14.3-32-32V352c0-17.7 14.3-32 32-32v-48c0-44.2 35.8-80 80-80zm0 48c-17.7 0-32 14.3-32 32v48h64v-48c0-17.7-14.3-32-32-32z" />
  </svg>
);

const SvgStoreLockSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgStoreLockSolid;
