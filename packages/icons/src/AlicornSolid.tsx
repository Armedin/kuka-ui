import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" {...props}>
    <path d="M632 32H531.9c5.875-6.125 10.25-13.62 11.1-22.37 1.9-4.998-2.9-9.63-7.9-9.63h-120C344.35 0 288 57.25 288 128c-63.88 0-104.2-36.76-127.7-90.26-4.2-7.52-13.6-7.71-17.1-.28-9.7 20.57-15.2 43.35-15.2 67.64 0 66.1 51 133.1 128 147.8v3.1c-76.88 0-133.8-49.62-152.6-109-5.65 4.2-10.77 8.9-15.4 14.1V160c-48.5 0-88 39.5-88 88v56c0 8.875 7.125 16 16 16h16c8.875 0 16-7.125 16-16l.002-56c0-13.25 6.878-24.38 16.75-31.62-.125 2.5-.753 5-.753 7.625 0 27.62 11.85 52.48 30.47 69.98l-25.74 68.89a63.458 63.458 0 0 0-2.095 37.62l21.77 87.28C91.97 502 104.8 512 119.5 512h32.98c20.81 0 36.09-19.55 31.05-39.74l-21.26-85.39 23.78-63.61 102.1 22.34-.05 134.4c0 17.67 14.33 32 32 32h32c17.6 0 32-14.4 32-32V318.2c19.6-21.1 32-47.7 32-78.2 0-.25-.105-.383-.105-.633V136.9L431.1 144l18.89 37.72c7.455 14.91 25.07 21.6 40.52 15.36l32.53-13.07c12.12-4.893 20.1-16.67 20.1-29.74l-.025-70.98 92.44-36.66C643 42.26 639.9 32 632 32zM480 96c-8.875 0-16-7.125-16-16s7.1-16 15.1-16c8.875 0 16 7.125 16 16s-6.2 16-15.1 16z" />
  </svg>
);

const SvgAlicornSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgAlicornSolid;