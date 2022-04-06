import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" {...props}>
    <path d="M287.1 199.7 437.5 27.11C452.5 9.886 474.2.001 497 .001c43.6 0 79 35.359 79 78.979 0 22.82-9.9 44.52-27.1 59.52l-161 140.2 242.9 190.4c10.4 8.2 12.3 23.3 4.1 33.7-8.2 10.4-23.3 12.3-33.7 4.1L9.196 42.89C-1.236 34.71-3.065 19.63 5.112 9.196 13.29-1.236 28.37-3.065 38.81 5.112L287.1 199.7zm12.8 225.4c-4 17.1-17 30.7-33.9 35.4L88.35 510.3l95.35-95.4c2.7.7 5.4 1.1 8.3 1.1 17.7 0 32-14.3 32-32s-14.3-32-32-32-32 14.3-32 32c0 2.9.4 5.6 1.1 8.3l-95.38 95.4 49.78-178.6c4.7-16 18.3-29 35.4-33l60.1-13.8 106.1 84.2-17.2 78.6z" />
  </svg>
);

const SvgPenFancySlashSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgPenFancySlashSolid;
