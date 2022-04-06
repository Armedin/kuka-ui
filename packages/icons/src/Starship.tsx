import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" {...props}>
    <path d="M512 256c0 35.3-28.7 64-64 64s-64-28.7-64-64 28.7-64 64-64 64 28.7 64 64zm-64-32c-17.7 0-32 14.3-32 32s14.3 32 32 32 32-14.3 32-32-14.3-32-32-32zM0 112c0-26.51 21.49-48 48-48h160c26.5 0 48 21.49 48 48 0 26.5-21.5 48-48 48h-46.8l47.6 34.6 59.3-8.2C296.8 114.8 366.5 64 448 64c106 0 192 85.1 192 192 0 106-86 192-192 192-81.5 0-151.2-50.8-179.9-122.4l-59.3-8.2-47.6 34.6H208c26.5 0 48 21.5 48 48s-21.5 48-48 48H48c-26.51 0-48-21.5-48-48s21.49-48 48-48h58.8l56.2-40.9-21.5-2.9c-26-3.6-45.5-25.9-45.5-52.2 0-26.3 19.5-48.6 45.5-52.2l21.5-2.9-56.2-40.9H48c-26.51 0-48-21.5-48-48zm48-16c-8.84 0-16 7.2-16 16s7.16 16 16 16h160c8.8 0 16-7.2 16-16s-7.2-16-16-16H48zm80 160c0 10.3 7.6 19.1 17.9 20.5l113.5 15.4c-2.2-11.6-3.4-23.6-3.4-35.9 0-12.3 1.2-24.3 3.4-35.9l-113.5 15.4c-10.3 1.4-17.9 10.2-17.9 20.5zM48 416h160c8.8 0 16-7.2 16-16s-7.2-16-16-16H48c-8.84 0-16 7.2-16 16s7.16 16 16 16zm400 0c88.4 0 160-71.6 160-160S536.4 96 448 96s-160 71.6-160 160 71.6 160 160 160z" />
  </svg>
);

const SvgStarship = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgStarship;
