import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M398.7 239.2c-19.8-8.8-41.1-13.1-62.7-14.5V112C336 50.25 285.75 0 224.9 0H112C50.25 0 0 50.25 0 112v384c0 8.8 7.156 16 16 16s16-7.2 16-16V112c0-44.11 35.88-80 80-80h112c44.13 0 80 35.89 80 80v112.7c-21.56 1.418-42.89 5.744-62.66 14.53-59.79 26.57-103.6 82.6-113.1 149.7C126.3 403.3 137.9 416 152.4 416h335.2c14.53 0 26.16-12.68 24.19-27.16C502.3 321.8 458.5 265.8 398.7 239.2zM161.5 384c10.2-50.6 45.1-94.4 92.8-115.6 18.6-8.2 40.6-12.4 65.5-12.4h.355c24.92 0 46.97 4.184 65.52 12.44C433.4 289.7 468.3 333.5 478.5 384h-317zM320 480c-20.83 0-38.43-13.42-45.05-32H241.6c7.434 36.47 39.74 64 78.38 64s70.95-27.53 78.38-64h-33.33c-6.53 18.6-24.13 32-45.03 32z" />
  </svg>
);

const SvgLampStreet = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgLampStreet;
