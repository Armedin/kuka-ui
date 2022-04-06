import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" {...props}>
    <path d="M81.74 38.77A39.903 39.903 0 0 1 104 32h432c15.5 0 29.5 8.91 36.1 22.87 6.7 13.97 4.6 30.5-6 42.46L406.6 293.4l224.2 175.7c10.4 8.2 12.3 23.3 4.1 33.7-8.2 10.4-23.3 12.3-33.7 4.1L9.196 42.89C-1.236 34.71-3.065 19.63 5.112 9.196 13.29-1.236 28.37-3.065 38.81 5.112L81.74 38.77zM256 400V297.7l128 100.9V448c0 12.1-6.8 23.2-17.7 28.6-10.8 5.4-23.8 4.3-33.5-3l-64-48c-8.1-6-12.8-15.5-12.8-25.6z" />
  </svg>
);

const SvgFilterSlashSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgFilterSlashSolid;
