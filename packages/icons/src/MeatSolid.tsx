import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" {...props}>
    <path d="M476 68.42C431.5 23.93 377.1 0 331.1 0c-23.6 0-44.8 6.748-61.4 19.1-2.8 2.52-5.1 4.51-7.4 6.76C223.55 64.48 160 139.66 160 209.46V309.8l-8.556 8.544c-9.626 9.749-24.01 11.12-36.76 5.999-26.63-10.62-57.01-.997-72.76 22.88-15.75 23.87-12.5 55.61 7.75 75.86 15.25 15.25 36.51 19.62 56.13 15.12-4.5 19.5-.128 40.8 15.12 56.05 20.25 20.37 51.97 23.59 75.97 7.839 23.88-15.75 33.56-46.08 22.81-72.83-5-12.62-3.626-26.1 6-36.74l8.582-8.522 100.5-.022c69.88 0 145.1-63.49 183.7-102.1 2.625-2.75 4.948-5.77 6.823-9.02C562.7 223.3 542.8 135.2 476 68.42zm8.7 179.38c-9.751 9.749-24.37 11.85-34.74 11.85-34.75 0-77.24-20.86-110.9-54.48-27.25-27.12-46.34-60.36-52.47-90.98-4.75-23.75-1.146-43.61 9.73-54.48 9.751-9.749 24.38-11.75 34.76-11.75 34.75 0 77.23 20.85 110.9 54.47C495.9 156.2 508.1 223.6 484.7 247.8zM363.9 127.2c-9.8 8.9-6.8 29.6 8.8 44.4 14.75 14.62 34.6 18.62 44.48 8.871 9.751-9.874 5.79-29.74-8.961-44.37C393.6 121.3 373.7 117.3 363.9 127.2z" />
  </svg>
);

const SvgMeatSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgMeatSolid;
