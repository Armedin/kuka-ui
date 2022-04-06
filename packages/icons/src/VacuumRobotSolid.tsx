import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M437 74.99C337-24.1 174.1-25 74.99 74.99-24.1 174.1-24.99 337 74.99 437c99.99 99.99 262 99.99 362 .003C536.1 337 536.1 174.1 437 74.99zM203.3 395.3c-3.125 3.125-7.219 4.688-11.31 4.688s-8.188-1.563-11.31-4.688l-64-64c-6.25-6.25-6.25-16.38 0-22.63s16.38-6.25 22.63 0l64 64c6.29 6.23 6.29 16.43-.01 22.63zm80-16c-3.1 3.1-7.2 3.8-11.3 3.8s-8.188-1.563-11.31-4.688L132.7 251.3c-6.25-6.25-6.25-16.38 0-22.63s16.38-6.25 22.62 0l128 128c6.28 6.23 6.28 16.43-.02 22.63zm16-80c-3.1 3.1-7.2 3.8-11.3 3.8s-8.188-1.562-11.31-4.687l-64-64c-6.29-5.313-6.29-15.513.01-21.713s16.38-6.25 22.63 0l64 64c6.27 6.2 6.27 16.4-.03 22.6zm80 80c-3.125 3.125-7.219 4.688-11.31 4.688s-8.188-1.563-11.31-4.688c-6.25-6.25-6.25-16.38 0-22.63 27.47-27.47 42.84-63.31 43.31-100.9.469-38.13-14.44-74.31-41.98-101.8-27.52-27.53-62.72-41.97-101.8-41.97-37.61.5-73.41 15.8-100.91 43.3-6.25 6.25-16.38 6.25-22.63 0s-6.25-16.38 0-22.63c33.41-33.41 77.13-52.13 123.1-52.69 45.98-1.094 91.14 17.66 124.8 51.34 33.69 33.69 51.92 78.03 51.36 124.8-.53 46.08-19.23 89.78-52.63 123.18z" />
  </svg>
);

const SvgVacuumRobotSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgVacuumRobotSolid;
