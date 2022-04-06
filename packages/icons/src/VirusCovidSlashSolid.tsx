import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" {...props}>
    <path d="m134.1 79.83 33.2-33.13c9.3-9.37 24.5-9.37 33.9 0 9.4 9.37 9.4 24.57 0 33.94l-11.3 11.31 23.8 23.75c23.5-17.82 51.6-29.9 81.4-34.08V48h-16c-12.4 0-24-10.74-24-24 0-13.25 11.6-24 24-24H360c13.3 0 24 10.75 24 24 0 13.26-10.7 24-24 24h-16v33.62c30.7 4.18 58.8 16.26 82.3 34.08l23.8-23.75-11.3-11.31c-9.4-9.38-9.4-24.57 0-33.94 9.4-9.38 24.6-9.38 33.9 0l56.6 56.6c9.4 9.3 9.4 24.5 0 33.9-9.4 9.4-24.6 9.4-33.9 0L484 125.9l-23.7 23.8c17.8 23.5 29.9 51.6 34.1 82.3H528v-16c0-13.3 10.7-24 24-24s24 10.7 24 24v80c0 13.3-10.7 24-24 24s-24-10.7-24-24v-16h-33.6c-3.2 23.3-11 45.2-22.3 64.7l158.7 124.4c10.4 8.2 12.3 23.3 4.1 33.7-8.2 10.4-23.3 12.3-33.7 4.1L9.196 42.89C-1.236 34.71-3.065 19.63 5.112 9.196 13.29-1.236 28.37-3.065 38.81 5.112L134.1 79.83zm15.1 133.67 252.1 198.7c-17.6 9.1-36.9 15.4-57.3 18.2V464h16c13.3 0 24 10.7 24 24s-10.7 24-24 24h-80.9c-12.4 0-24-10.7-24-24s11.6-24 24-24h16v-33.6c-29.8-4.2-57.9-16.3-81.4-34.1l-23.8 23.8 11.3 11.3c9.4 9.3 9.4 24.5 0 33.9-9.4 9.4-24.6 9.4-33.9 0l-56.6-56.6c-9.4-9.3-9.4-24.5 0-33.9 9.4-9.4 24.6-9.4 33.9 0l10.5 11.3 24.6-23.8c-17.8-23.5-29.9-51.6-34.1-82.3h-34.5v16c0 13.3-9.8 24-24 24-12.36 0-24-10.7-24-24v-80c0-13.3 11.64-24 24-24 14.2 0 24 10.7 24 24v16h34.5c.9-6.3 2.1-12.4 3.6-18.5z" />
  </svg>
);

const SvgVirusCovidSlashSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgVirusCovidSlashSolid;
