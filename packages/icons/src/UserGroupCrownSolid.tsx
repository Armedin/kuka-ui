import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" {...props}>
    <path d="M224 272c70.75 0 128-57.25 128-128V0l-64 32-64-32-64 32L96 0v144c0 70.8 57.3 128 128 128zm-80-144h160v16c0 44.1-35.9 80-80 80s-80-35.9-80-80v-16zm130.7 176H173.3C77.61 304 0 381.6 0 477.3 0 496.5 15.52 512 34.66 512H413.3c19.2 0 34.7-15.5 34.7-34.7 0-95.7-77.6-173.3-173.3-173.3zM544 144c0-61.86-50.1-112-112-112-17.3 0-33.45 4.285-48 11.38V144c0 31.09-9.285 59.89-24.69 84.47C378.9 245.4 404.1 256 432 256c61.9 0 112-50.1 112-112zm-64.9 176h-73.85C451.2 357.7 480 414.1 480 477.3c0 12.8-3.8 24.6-10 34.7h137.1c18.6 0 32.9-14.4 32.9-32.9 0-87.5-71.6-159.1-160.9-159.1z" />
  </svg>
);

const SvgUserGroupCrownSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgUserGroupCrownSolid;
