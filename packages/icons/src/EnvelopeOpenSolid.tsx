import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M493.6 163c-24.88-19.62-45.5-35.37-164.3-121.6C312.7 29.21 279.7 0 256.4 0h-.8c-23.3 0-56.3 29.21-73 41.38-118.8 86.25-139.4 101.1-164.3 121.6C6.75 172 0 186 0 200.8V464c0 26.5 21.49 48 48 48h416c26.51 0 48-21.49 48-47.1V200.8c0-14.8-6.7-28.8-18.4-37.8zM303.2 367.5c-14.1 11-30.7 16.5-47.2 16.5s-33.06-5.484-47.16-16.47L64 254.9v-46.4c21.16-16.59 46.48-35.66 156.4-115.5 3.18-2.328 6.891-5.187 10.98-8.353C236.9 80.44 247.8 71.97 256 66.84c8.207 5.131 19.14 13.6 24.61 17.84 4.09 3.166 7.801 6.027 11.15 8.478C400.9 172.5 426.6 191.7 448 208.5v46.32L303.2 367.5z" />
  </svg>
);

const SvgEnvelopeOpenSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgEnvelopeOpenSolid;