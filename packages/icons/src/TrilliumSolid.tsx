import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M159.1 160c0-64.09 62.5-128.18 87-151.133 5.7-5.281 14.1-5.281 19.8-.001C290.4 31.82 352 95.91 352 160c0 15.7-3.8 30.4-10.4 43.5 16.2 0 32.6 4.2 47.7 12.9 55.5 32 80.2 117.4 87.8 150.1 1.8 7.6-2.5 14.9-9.9 17.1-32.1 9.8-118.4 31.1-173.9-.9-16.6-9.6-29.2-23.4-37.4-39.2-8.1 15.8-20.8 29.6-37.3 39.2-55.5 32-141.85 10.7-173.99 1-7.39-2.3-11.63-9.6-9.88-17.2 7.63-32.7 32.32-118.1 87.87-150.1 15.1-8.7 31.5-12.9 47.8-12.9-6.7-13.1-11.3-27.8-11.3-43.5zm96.9 40c-22.1 0-40 17.9-40 40s17.9 40 40 40 40-17.9 40-40-17.9-40-40-40zm128-40c0-12.5-1.8-24.8-4.8-36.6 38.6-12.8 68.2-11.9 82.9-10 14.9 1.9 23.7 17.1 17.9 30.9-5.6 13.3-19 38.4-47.7 63.8-8.1-6.8-17.1-13.7-27-19.4-8.2-4.3-14.9-7.7-22.6-10.3.9-6 1.3-12.2 1.3-18.4zm-251.2-36.6c-3 11.8-5.7 24.1-5.7 36.6 0 6.2 1.3 12.3 2.2 18.3-7.8 1.8-15.4 6.1-22.7 10.4-9.93 5.7-18.88 12.6-26.98 20.2-28.67-26.2-42.05-51.3-47.64-64.6-5.81-13.8 2.98-29 17.87-30.9 14.71-1.9 44.36-2.8 82.95 10zm101.8 287c7.7-4.5 14.9-9.7 21.3-15.5 6.5 5.8 13.6 11 21.4 15.5 9.1 5.3 18.8 9.4 28.6 12.5-8.2 35.2-22.6 61.6-31 74.2-9.1 13.7-28.7 13.7-37.8 0-8.4-12.6-22.9-38.2-31-74.3 9.8-3.1 19.3-7.2 28.5-12.4z" />
  </svg>
);

const SvgTrilliumSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgTrilliumSolid;