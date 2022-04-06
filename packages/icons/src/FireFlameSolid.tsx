import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" {...props}>
    <path d="M203.1 4.364c-6.179-5.822-16.06-5.818-22.24.005C74.52 104.6 0 220.2 0 298c0 125.1 79 214 192 214s192-88.01 192-213.1c0-79-75-194.7-180.9-294.536zM192 448c-70.62 0-128-52.88-128-117.9 0-44.12 25.88-71.5 34.38-79.75a7.922 7.922 0 0 1 11.25 0c1.47 1.55 2.37 3.55 2.37 5.65v40c0 31 25 56 56 56 30.9 0 56-25 56-56 0-72-112.6-64.8-39.5-164.4 3-3.8 7.5-4.1 10.6-3.1 1.625.5 5.375 2.25 5.375 6.75 0 33.63 25.12 54.1 51.63 77.63C285.5 241.5 320 271 320 330.1c0 65-57.4 117.9-128 117.9z" />
  </svg>
);

const SvgFireFlameSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgFireFlameSolid;
