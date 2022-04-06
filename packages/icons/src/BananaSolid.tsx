import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" {...props}>
    <path d="M284.2 245.6c12.99 6.929 25.35 15.14 36.08 25.8l14.22 14.2 65.75-23.47c14.75-5.265 30.18-7.849 45.81-8.389 1.154-10.73 1.764-21.38 1.764-31.87 0-118.5-81.33-221.9-119.7-221.9-21.01 0-40.91 17.04-40.91 39.25 0 16.18 16.74 41.9 16.74 103C303.1 170.1 300.6 203.1 284.2 245.6zm290.9 144a23.6 23.6 0 0 0-2.687-10.93l-15.12-29.11c-21.05-40.53-63.08-64.51-106.9-64.51-13.43 0-27.02 2.252-40.22 6.969l-84.84 30.27-28.59-28.41C274.4 270.9 243.7 258.1 212.8 258.1c-23.72 0-47.57 6.97-68.29 21.2l-38.21 27.1a23.788 23.788 0 0 0-10.35 19.63c0 14.93 12.7 23.87 24.04 23.87 4.695 0 9.443-1.376 13.61-4.26l38.13-26.23a72.175 72.175 0 0 1 40.91-12.69c10.64 0 21.24 2.339 30.97 6.934-50.62 62.23-128.3 99.85-211.4 99.85C14.42 413.5 0 427.8 0 445.5v31.38c0 17.68 14.66 32.02 32.46 32.02h28.98c14.15 0 34.69 1.099 59.07 1.099 93.51 0 243.4-16.15 304.8-172.4 9.021-3.22 17.95-4.712 26.53-4.712 27.65 0 51.7 15.49 63.7 38.55l15.12 29.11c3.484 6.723 11.74 12.98 21.41 12.98 12.03.073 23.03-9.727 23.03-23.927z" />
  </svg>
);

const SvgBananaSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgBananaSolid;
