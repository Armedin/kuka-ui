import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
    <path d="M224 0c70.7 0 128 57.31 128 128 0 35.3 16.6 68.4 44.8 89.6l4.3 3.2c9.4 7.1 14.9 18.1 14.9 29.9 0 20.6-16.7 37.3-37.3 37.3H320c-8.8 0-16-7.2-16-16s7.2-16 16-16h58.7c2.9 0 5.3-2.4 5.3-5.3 0-2.6-.8-3.3-2.1-4.3l-4.3-3.2c-15.8-11.9-28.8-26.7-38.4-43.4C318.5 242.6 274.7 272 224 272s-94.5-29.4-115.2-72.2c-9.61 16.7-22.59 31.5-38.4 43.4l-4.27 3.2c-1.34 1-2.13 1.7-2.13 4.3 0 2.9 2.39 5.3 5.33 5.3H128c8.8 0 16 7.2 16 16s-7.2 16-16 16H69.33C48.71 288 32 271.3 32 250.7c0-11.8 5.53-22.8 14.93-29.9l4.27-3.2C79.4 196.4 96 163.3 96 128 96 57.31 153.3 0 224 0zm94.7 112h-30.1c-14.9 0-29.1-5.9-40.5-16.4l-5.4-6.27C223.4 113.5 193.1 128 162.3 128H128v16c0 53 42.1 96 96 96 53 0 96-43 96-96v-16c0-5.5-.5-10.8-1.3-16zm-67.4-59.31 20.3 20.28c4.5 4.5 10.6 7.03 17 7.03h18.6c-16.6-28.69-47.7-48-83.2-48-41.8 0-77.4 26.71-90.5 64h28.8c26.8 0 51.2-15.03 63.2-38.85.8-1.62 1.9-3.13 3.2-4.46 6.2-6.25 16.4-6.25 22.6 0zM0 483.6C0 393.2 73.23 320 163.6 320h120.8c90.4 0 163.6 73.2 163.6 163.6 0 15.7-12.7 28.4-28.4 28.4H28.44C12.74 512 0 499.3 0 483.6zm415.1-3.6c-1-71.9-59.2-128-130.7-128H163.6c-71.51 0-129.67 56.1-131.55 128H415.1z" />
  </svg>
);

const SvgUserHairLong = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgUserHairLong;