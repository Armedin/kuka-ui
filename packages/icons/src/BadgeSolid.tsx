import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M437 74.98c26 26.02 33.1 63.22 23.9 96.12 30.4 16.1 51.1 48.1 51.1 84.9 0 36.8-20.7 68.8-51.1 84.9C471 373.8 463 410.1 437 437c-26.9 26-63.2 33.1-96.1 23.9-16.1 30.4-48.1 51.1-84.9 51.1-36.8 0-68.8-20.7-84.9-51.1C138.2 471 101 463 74.98 437 48.96 410.1 41 373.8 51.1 340.9 20.7 324.8 0 292.8 0 256c0-36.8 20.7-68.8 51.1-84.9-11-32.9-2.14-70.1 23.88-96.12C101 48.96 138.2 41 171.1 51.1 187.2 20.7 219.2 0 256 0c36.8 0 68.8 20.7 84.9 51.1 32.9-11 69.2-2.14 96.1 23.88z" />
  </svg>
);

const SvgBadgeSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgBadgeSolid;
