import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" {...props}>
    <path d="M449.9 48H616c13.25 0 24-10.75 24-24S629.3 0 616 0H449.9c-65.87 0-131.2 16.47-189.5 47.06C244.2 34.17 195.5 0 136 0 64.44 0 7.7 49.94 5.3 52.07 1.948 55.11.01 59.44.01 64s1.939 8.891 5.345 11.94c1.72 1.54 32.195 27.16 75.965 42.56-12.07 6.3-23.92 14.1-34.33 23.6C-1.47 190.57-.07 268.2.03 271.5c.21 9.4 7.055 16.3 15.58 15.6.25 0 .898.016 1.93.016 12.84 0 82.66-2.147 127.5-46.98 30.93-30.93 41.48-73.57 45.09-101.4l87.41-47.7C330.3 63.21 389.9 48 449.9 48zM336 128c-79.53 0-143.1 85.96-143.1 192S257.37 512 336 512s143.1-85.96 143.1-192S415.5 128 336 128zm91.8 1.2c50.4 39.5 84.2 110.3 84.2 191.1 0 59.01-18.11 112.6-47.45 152.7 53.26 14.72 105.8 6.727 140.2-27.74 58.32-58.4 42.56-168.9-35.2-246.7C527.4 156.2 475.7 132.1 427.8 129.2z" />
  </svg>
);

const SvgOliveBranchSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgOliveBranchSolid;
