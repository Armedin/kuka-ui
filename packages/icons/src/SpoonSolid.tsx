import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M449.5 242.2c-13.1 15.6-29.7 27.8-49.4 35.6-17.9 7.8-38.4 11-58.7 9.2-15.2-2.5-29.6-8.6-41.9-17.9L68.29 500.3A40 40 0 0 1 40 512c-10.61 0-20.78-4.2-28.29-11.7A40.058 40.058 0 0 1-.004 472c0-10.6 4.215-20.8 11.714-28.3L243 212.5c-9.3-12.3-15.4-26.7-17.9-41.9-1.8-20.3 1.4-40.7 9.2-59.6 7.8-18.78 20-35.44 35.6-48.53 67.9-67.907 163.2-82.75 212.8-33.12 49.6 49.6 34.7 144.85-33.2 212.85z" />
  </svg>
);

const SvgSpoonSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgSpoonSolid;
