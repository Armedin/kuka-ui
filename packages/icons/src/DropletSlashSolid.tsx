import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" {...props}>
    <path d="M215.3 143.4c28.2-48.33 58.9-94.11 79.6-124.1 12.3-17.715 37.9-17.715 50.2 0C393.7 89.43 496 245.9 496 319.1c0 14.6-1.6 28-4.5 40.8l139.3 109.2c10.4 8.2 12.3 23.3 4.1 33.7-8.2 10.4-23.3 12.3-33.7 4.1L9.196 42.89C-1.236 34.71-3.065 19.63 5.112 9.196 13.29-1.236 28.37-3.065 38.81 5.112L215.3 143.4zm-72.2 175.7c0-22.6 11.2-54.5 26-89.2l274.4 215.5c-31.8 31.3-75.4 50.6-124.4 50.6-96.3 0-176-78.8-176-176.9zm96 0c0-7.9-6.3-16-16-16-7.9 0-16 8.1-16 16 0 62.8 51 112.9 112 112.9 9.7 0 16.9-7.2 16.9-16s-7.2-16-16.9-16c-43.3 0-80-35.8-80-80.9z" />
  </svg>
);

const SvgDropletSlashSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgDropletSlashSolid;
