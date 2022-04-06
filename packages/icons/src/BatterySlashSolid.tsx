import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" {...props}>
    <path d="M154.8 96H496c44.2 0 80 35.8 80 80v16c17.7 0 32 14.3 32 32v64c0 17.7-14.3 32-32 32v16c0 26.5-12.9 49.1-32.7 64.5l87.5 68.6c10.4 8.2 12.3 23.3 4.1 33.7-8.2 10.4-23.3 12.3-33.7 4.1L9.196 42.89C-1.236 34.71-3.065 19.63 5.112 9.196 13.29-1.236 28.37-3.065 38.81 5.112L154.8 96zm81.6 64 245 192H496c8.8 0 16-7.2 16-16V176c0-8.8-7.2-16-16-16H236.4zm88.5 192 81.3 64H112c-44.18 0-80-35.8-80-80V176c0-16.4 4.92-31.6 13.35-44.3L96.5 172a16 16 0 0 0-.5 4v160c0 8.8 7.2 16 16 16h212.9z" />
  </svg>
);

const SvgBatterySlashSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgBatterySlashSolid;
