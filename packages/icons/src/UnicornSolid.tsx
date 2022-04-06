import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" {...props}>
    <path d="M632 32H531.8c5.875-6.125 10.29-13.61 12.04-22.36 1-5-2.938-9.643-7.938-9.643L416 0c-70.7 0-128 57.25-128 128H160c-28.8 0-54.4 13-72 33.1V160c-48.5 0-88 39.5-88 88v56c0 8.9 7.125 16 16 16h16c8.875 0 16-7.125 16-16v-56c0-13.25 6.875-24.38 16.75-31.62-.125 2.5-.751 5.002-.751 7.627 0 27.62 11.87 52.5 30.5 69.1l-25.76 68.87a63.494 63.494 0 0 0-2.111 37.63l21.85 87.27C92.04 502 104.8 512 119.5 512h32.99c20.81 0 36.09-19.55 31.05-39.74l-21.3-85.38 23.87-63.62 102 22.37V480c0 17.67 14.33 32 32 32h32c17.6 0 32-14.4 32-32V318.3C403.8 298 416.1 270.5 416.1 240c0-.25-.125-.375-.125-.625V136.9L432 144l18.75 37.72c7.455 14.91 25.12 21.6 40.57 15.36l32.53-13.05c12.16-4.912 20.15-16.68 20.15-29.8l-.052-70.93 92.46-36.67C643 42.26 639.9 32 632 32zM479.9 96c-8.9 0-16-7.12-16-16s7.1-16 16-16c8.875 0 16.02 7.125 16.02 16s-7.12 16-16.02 16z" />
  </svg>
);

const SvgUnicornSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgUnicornSolid;