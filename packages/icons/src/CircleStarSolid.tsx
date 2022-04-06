import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M512 256c0 141.4-114.6 256-256 256S0 397.4 0 256 114.6 0 256 0s256 114.6 256 256zM241.7 112.9l-36.3 73.5-81 11.7c-6.1.9-11.1 5.1-13 10.9-1.8 5.8-.3 12.2 4.1 16.4l58.6 57.2-13.8 80.7c-1 6 1.4 12.1 6.4 14.8 4.9 4.5 11.4 4.9 16.8 2.1l71.6-38.1 73.4 38.1c5.4 2.8 11.9 2.4 16.8-2.1 5-2.7 7.4-8.8 6.4-14.8l-13.8-80.7 58.6-57.2c4.4-4.2 5.9-10.6 4.1-16.4-1.9-5.8-6.9-10-13-10.9l-81-11.7-36.3-73.5c-2.6-5.4-8.2-8.9-15.2-8.9-5.2 0-10.8 3.5-13.4 8.9z" />
  </svg>
);

const SvgCircleStarSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgCircleStarSolid;
