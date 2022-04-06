import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" {...props}>
    <path d="m192.5 125.6 44.6-44.63c28.1-28.12 73.7-28.12 101.8 0L481.9 224l-72 72 220.9 173.1c10.4 8.2 12.3 23.3 4.1 33.7-8.2 10.4-23.3 12.3-33.7 4.1L9.196 42.89C-1.236 34.71-3.065 19.63 5.112 9.196 13.29-1.236 28.37-3.065 38.81 5.112L192.5 125.6zm38 29.8 33.7 26.4 53.9-53.8-14-13.1c-8.5-9.4-23.7-9.4-33.1 0l-40.5 40.5zm-67 127.1 32.3-32.2 145.4 114.5-47.7 47.7c-48 48-109.2 80.7-175.8 94l-25 5c-7.86 1.6-16-.9-21.67-7.4-5.68-4.8-8.14-12.9-6.57-20.8l5-25c13.32-66.6 46.04-127.8 94.04-175.8zM556.7 58.75c25 24.99 25 65.55 0 90.55l-52.1 52.1-130-129.97 52.1-52.11c25-24.997 65.6-24.997 90.6 0l39.4 39.43z" />
  </svg>
);

const SvgPenClipSlashSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgPenClipSlashSolid;
