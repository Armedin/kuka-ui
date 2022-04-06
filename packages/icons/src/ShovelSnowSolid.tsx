import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M504.1 81.77 429.12 6.76c-9.016-9.036-24.95-9.005-33.94 0l-29.02 29.05C351.61 50.35 343.6 69.7 343.6 90.28c0 12.28 3.17 23.97 8.561 34.62l-93.53 93.69L210.2 169.2c-11.38-11.26-29.38-12.51-42-2.626l-155.9 120.3c-15.13 11.76-16.63 34.15-3 47.66l168 168.1c13.63 13.63 35.88 12.13 47.63-3.001l120.4-155.1c9.877-12.63 8.627-30.52-2.625-41.9L293.4 252.5l93.6-93.64c10.62 5.36 22.27 8.508 34.51 8.508 20.59 0 39.94-8.004 54.47-22.57l29.02-29.05c9.3-9.448 9.3-24.598-.9-33.978zm-393 270.13c-4.127 0-8.251-1.624-11.25-4.753-6.25-6.128-6.25-16.38 0-22.51L180.7 244.6c6.125-6.378 16.38-6.378 22.5 0 6.25 6.13 6.25 16.38 0 22.51l-80.01 80.04c-2.99 3.15-7.09 4.75-12.09 4.75zm156.2-20.7-80.01 80.04c-3 3.127-7.124 4.753-11.25 4.753-4.125 0-8.25-1.626-11.25-4.753-6.252-6.128-6.252-16.38 0-22.51l80-80.04c6.127-6.253 16.38-6.253 22.5 0 6.21 6.11 6.31 16.41.01 22.51zm173.8-220.4c-10.94 11.01-30.08 11.01-41.02 0-5.484-5.472-8.516-12.79-8.516-20.54s3.016-15.04 8.5-20.51l12.05-12.07 41.05 41.05L441.1 110.8z" />
  </svg>
);

const SvgShovelSnowSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgShovelSnowSolid;
