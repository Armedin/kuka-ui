import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" {...props}>
    <path d="M464 96c61.9 0 112 50.1 112 112 0 10.7-1.5 20.1-4.3 30.8C612.3 260.2 640 302.9 640 352c0 70.7-57.3 128-128 128H144C64.47 480 0 415.5 0 336c0-62.8 40.15-116.1 96.17-135.9C100.3 106.6 177.4 32 272 32c59.5 0 112.1 29.55 144 74.8 14.5-6.93 30.8-10.8 48-10.8zm-34.3 39.7c-14 6.7-30.9 2.2-39.9-10.5C363.7 88.12 320.7 64 272 64c-77.4 0-140.5 61-143.9 137.5-.5 13.1-9 23.6-21.3 28.8C63.18 245.7 32 287.2 32 336c0 61.9 50.14 112 112 112h368c53 0 96-43 96-96 0-36.8-20.7-68.8-51.2-84.9-13.4-8-20-22.6-15.9-38 2-6.1 3.1-13.4 3.1-21.1 0-44.2-35.8-80-80-80-12.3 0-23.9 2.8-34.3 7.7z" />
  </svg>
);

const SvgCloud = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgCloud;
