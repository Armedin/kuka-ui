import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
    <path d="M224 272c70.75 0 128-57.25 128-128V0l-64 32-64-32-64 32L96 0v144c0 70.8 57.3 128 128 128zm-80-144h160v16c0 44.1-35.9 80-80 80s-80-35.9-80-80v-16zm130.7 176H173.3C77.61 304 0 381.6 0 477.3 0 496.5 15.52 512 34.66 512H413.3c19.2 0 34.7-15.5 34.7-34.7 0-95.7-77.6-173.3-173.3-173.3z" />
  </svg>
);

const SvgUserCrownSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgUserCrownSolid;
