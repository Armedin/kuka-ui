import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M0 256c0-16.6 1.577-32.8 4.588-48.5l-2.619-15.7C-5.969 144.2 22.45 100 65.28 85.22 112.2 32.91 180.2 0 256 0s143.8 32.91 190.7 85.22C489.6 100 517.1 144.2 510 191.8l-2.6 15.7c3 15.7 4.6 31.9 4.6 48.5 0 141.4-114.6 256-256 256S0 397.4 0 256zm230.7-24.1 8-48c.4-2.7.6-5.3.7-7.9h33.2c.1 2.6.3 5.2.7 7.9l8 48c3.9 23.1 23.9 40.1 47.4 40.1h78.6c23.5 0 43.5-17 47.4-40.1l8-48c4.9-29.3-18.6-55.9-47.4-55.9h-94.6c-14.4 0-27.1 6.2-35.8 16h-57.8c-8.7-9.8-21.4-16-35.8-16H96.66c-29.66 0-52.22 26.6-47.34 55.9l8 48C61.17 255 81.2 272 104.7 272h78.6c23.5 0 43.5-17 47.4-40.1zm-66.6 109.6c-5.8-6.7-15.9-7.4-22.6-1.6-6.7 5.8-7.4 15.9-1.6 22.6 22.2 25.6 61 53.5 115.2 53.5 56 0 94.7-27.9 117-53.5 5.8-6.7 5.1-16.8-1.6-22.6-6.7-5.8-16.8-5.1-22.6 1.6-18 20.7-48.5 42.5-92.8 42.5-42.5 0-73.1-21.8-91-42.5z" />
  </svg>
);

const SvgFaceSunglassesSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgFaceSunglassesSolid;
