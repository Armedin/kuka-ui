import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
    <path d="M441.1 372.5c7.281 5 9.109 14.97 4.094 22.25L425.714 423C414.8 438.7 397 448 377.1 448c-32 0-57.1-26-57.1-58V96H160v173c0 36.13-9.469 71.81-27.41 103.2l-38.7 67.7c-2.95 5.2-8.34 8.1-13.91 8.1-2.688 0-5.422-.688-7.922-2.094C64.39 441.5 61.72 431.7 66.11 424.1l38.7-67.72C119.1 329.8 128 299.6 128 269V96H16C7.164 96 0 88.84 0 80s7.164-16 16-16h416c8.8 0 16 7.16 16 16s-7.2 16-16 16h-80v294c0 14.3 11.7 26 25.1 26 8.531 0 16.53-4.188 21.39-11.22l19.47-28.25c5.94-7.23 15.84-9.13 23.14-4.03z" />
  </svg>
);

const SvgPi = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgPi;
