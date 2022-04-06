import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" {...props}>
    <path d="M484.6 62c18-9.2 38-14 58.2-14h57.4c27 0 45.7 26.95 36.2 52.2-18.2 48.7-54.3 88.7-100.8 112L262.8 348.6c-4.5 2.2-9.4 3.4-14.4 3.4H110.7c-9.3 0-18.2-4.1-24.28-11.2l-73.08-85.2c-6.778-7.9-4.321-20.1 4.99-24.8l32.16-16c8.56-4.3 18.57-4.6 27.31-.7l57.3 25 99.5-49.4L87.64 95.2c-10.43-6.71-9.59-22.22 1.5-27.77L135 44.48c15.1-7.96 34.5-8.93 51.1-2.68L381 114.9 484.6 62zM0 480c0-17.7 14.33-32 32-32h576c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.67 0-32-14.3-32-32z" />
  </svg>
);

const SvgPlaneDepartureSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgPlaneDepartureSolid;
