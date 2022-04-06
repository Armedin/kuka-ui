import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" {...props}>
    <path d="M350.6 225.5c-6.9-37.2-39.3-65.5-78.5-65.5-12.3 0-23.9 3-34.3 8-17.5-24.1-45.6-40-77.8-40-53 0-95.98 43-95.98 96 0 .5.25 1.125.25 1.625C27.63 232.9 0 265.3 0 304c0 38.93 27.7 71.22 64.5 78.44.46-13.03 5.756-25.72 15.9-34.56L208.3 235.9c8.8-7.7 20-11.9 30.8-11.9 11.1 0 20.8 3.2 29.1 9.2 18.23 13.27 24.76 36.1 15.89 57.71L264.76 336h7.195c19.88 0 37.94 12.51 44.92 31.11C318.1 372.6 319.7 378.3 319.7 384h16.32c44.26 0 80.02-35.74 80.02-79.99.06-39.21-28.14-71.71-65.44-78.51zm217.3-1.7c-70.3 13.3-135-40.3-135-110.8 0-40.63 21.88-78 57.5-98.13 5.502-3.125 4.125-11.38-2.125-12.5C479.7.75 470.8 0 461.8 0c-77.88 0-141 61.25-144.4 137.9 26.75 11.88 48.26 33.88 58.88 61.75 37.13 14.25 64.01 47.38 70.26 86.75 5.125.5 10 1.5 15.26 1.5 44.63 0 85.5-20.12 112.5-53.25 4.3-4.85-.1-12.05-6.4-10.85zM272 368h-55.7l38.45-89.7c2.938-6.859.719-14.84-5.312-19.23-6.096-4.422-14.35-4.031-19.94.89l-128 111.1a15.979 15.979 0 0 0-4.439 17.67 15.993 15.993 0 0 0 14.97 10.38H167.7l-38.45 89.7c-2.938 6.86-.719 14.84 5.312 19.23C137.4 510.1 140.7 512 143.1 512c3.781 0 7.531-1.328 10.53-3.953l128-111.1a15.979 15.979 0 0 0 4.439-17.67C284.6 372.1 278.7 368 272 368z" />
  </svg>
);

const SvgCloudBoltMoonSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgCloudBoltMoonSolid;
