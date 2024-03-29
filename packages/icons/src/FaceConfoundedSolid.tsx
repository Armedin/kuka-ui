import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M0 256C0 114.6 114.6 0 256 0s256 114.6 256 256-114.6 256-256 256S0 397.4 0 256zm118.8-43.2 36 43.2-36 43.2c-2.7 2.2-2.8 4.9-2.8 7.7 0 8.9 9.6 14.7 17.5 10.4l89.9-47.9c10.7-5.7 10.7-21.1 0-26.8l-89.9-47.9c-7.9-4.3-17.5 1.5-17.5 10.4 0 2.8.1 5.5 2.8 7.7zm169.8 29.8c-10.7 5.7-10.7 21.1 0 26.8l89.9 47.9c7.9 4.3 17.5-1.5 17.5-10.4 0-2.8-1-5.5-2.8-7.7l-36-43.2 36-43.2c1.8-2.2 2.8-4.9 2.8-7.7 0-8.9-9.6-14.7-17.5-10.4l-89.9 47.9zm-71.7 112.1c-5.4-3.6-12.4-3.6-17.8 0l-40.2 26.8-23.7-11.8c-7.9-4-17.6-.8-21.5 7.1-4 7.9-.8 17.6 7.1 21.5l32 16c4.3 2.6 11.3 2.2 16.1-1l39.1-26.1 39.1 26.1c5.4 3.6 12.4 3.6 17.8 0l39.1-26.1 39.1 26.1c4.8 3.2 10.9 3.6 16.1 1l32-16c7.9-3.9 11.1-13.6 7.1-21.5-3.9-7.9-13.6-11.1-21.5-7.1l-23.7 11.8-40.2-26.8c-5.4-3.6-12.4-3.6-17.8 0L256 380.8l-39.1-26.1z" />
  </svg>
);

const SvgFaceConfoundedSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgFaceConfoundedSolid;
