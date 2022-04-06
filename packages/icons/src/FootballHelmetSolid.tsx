import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M496 320H354.3l-14.2-75.98 137-17.82c8.523-1.188 14.67-9.027 13.83-17.39C459.4 61.7 332.5 16 256 16 123.5 16 16 123.5 16 256c0 56.09 19.41 107.5 51.68 148.4 5.941 7.52 15.3 11.58 24.89 11.58h27.39l85.75 45.04c25.12 12.62 55.62 7.714 75.62-12.29C317.6 412.5 292.3 366.8 286.4 352h41.36l9.875 52.66C347.5 457.6 393.8 496 447.7 496h48.31c8.844 0 16-7.156 16-16V336c-.01-8.8-7.21-16-16.01-16zm-320.9 39.1c-13.25 0-24-10.75-24-24s10.75-24 24-24 24 10.75 24 24-9.9 24-24 24zm98.5-39.1-10.34-25.79c-7.75-19.38 4.996-40.89 25.62-43.51l19.48-2.538L321.7 320h-48.1zm205.5 144h-32.31c-32.28 0-60.54-19.45-73.07-48h105.4v48zm0-80H365.4l-5.992-32h119.7v32z" />
  </svg>
);

const SvgFootballHelmetSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgFootballHelmetSolid;
