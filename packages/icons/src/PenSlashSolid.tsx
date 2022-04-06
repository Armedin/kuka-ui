import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" {...props}>
    <path d="m264.3 181.8 91.4-91.45 130 129.95-75.8 75.7 220.9 173.1c10.4 8.2 12.3 23.3 4.1 33.7-8.2 10.4-23.3 12.3-33.7 4.1L9.196 42.89C-1.236 34.71-3.065 19.63 5.112 9.196 13.29-1.236 28.37-3.065 38.81 5.112L264.3 181.8zM122.6 323.5l73.2-73.2 145.4 114.5-88.7 88.6c-10.4 10.4-23.3 18.1-37.4 22.2L94.77 511c-8.42 2.5-17.53.2-23.74-6.9-6.21-5.3-8.53-14.4-6.05-22.9l35.42-120.3c4.1-14.1 11.8-27 22.2-37.4zM426.7 19.32c25-24.997 65.6-24.997 90.6 0l39.4 39.43c25 24.99 25 65.55 0 90.55l-48.4 48.4-130-129.98 48.4-48.4z" />
  </svg>
);

const SvgPenSlashSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgPenSlashSolid;
