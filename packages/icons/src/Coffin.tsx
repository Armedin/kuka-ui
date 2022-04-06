import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
    <path d="m402.7 112.8-98.8-99.3C295.1 4.75 283.6 0 271.4 0h-94.8c-12.2 0-23.7 4.75-32.5 13.5l-98.75 99.3c-11.25 11.38-15.88 28-12 43.63l79.88 320.8C118.2 497.6 136.6 512 157.7 512h132.5c21.13 0 39.51-14.38 44.51-34.88l79.89-320.8c3.9-15.52-.7-32.22-11.9-43.52zm-98.9 356.6c-1.5 6.2-7.2 10.6-13.5 10.6H157.7c-6.375 0-12-4.375-13.5-10.62L64.35 148.6c-1.12-4.7.25-9.8 3.75-13.3l98.64-99.13C169.5 33.5 172.1 32 176.6 32h94.76c3.75 0 7.125 1.5 9.75 4l98.76 99.25c3.502 3.5 4.877 8.625 3.752 13.38L303.8 469.4z" />
  </svg>
);

const SvgCoffin = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgCoffin;
