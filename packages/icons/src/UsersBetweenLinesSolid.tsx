import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" {...props}>
    <path d="M0 24C0 10.75 10.75 0 24 0h592c13.3 0 24 10.75 24 24s-10.7 24-24 24H24C10.75 48 0 37.25 0 24zm0 464c0-13.3 10.75-24 24-24h592c13.3 0 24 10.7 24 24s-10.7 24-24 24H24c-13.25 0-24-10.7-24-24zm211.2-328c0 35.3-28.7 64-64 64s-64-28.7-64-64 28.7-64 64-64 64 28.7 64 64zM32 320c0-35.3 28.65-64 64-64h96c12.2 0 23.7 3.4 33.4 9.4-37.2 15.1-65.6 47.2-75.8 86.6H64c-17.67 0-32-14.3-32-32zm383.9-55.4c9.4-5.5 20.4-8.6 32.1-8.6h96c35.3 0 64 28.7 64 64 0 17.7-14.3 32-32 32h-82.4c-10.4-40.1-40.5-72.6-77.7-87.4zm-24.7 25.8c32.1 7.4 58.1 30.9 68.9 61.6 3.6 10 5.5 20.8 5.5 32 0 17.7-14.3 32-32 32h-224c-17.7 0-32-14.3-32-32 0-11.2 1.9-22 5.5-32 10.5-29.7 35.2-52.8 66-60.9 7-2 16-3.1 24.5-3.1h96c7.4 0 14.7.8 21.6 2.4zm172-130.4c0 35.3-28.7 64-64 64s-64-28.7-64-64 28.7-64 64-64 64 28.7 64 64zm-321.6 16c0-44.2 35.8-80 80-80s80 35.8 80 80-35.8 80-80 80-80-35.8-80-80z" />
  </svg>
);

const SvgUsersBetweenLinesSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgUsersBetweenLinesSolid;
