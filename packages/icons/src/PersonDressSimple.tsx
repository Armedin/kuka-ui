import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512" {...props}>
    <path d="m255.4 363.6-44.91-157.2C202.6 178.9 177.5 160 148.9 160h-41.8c-28.6 0-53.71 18.9-61.56 46.4L.63 363.6C-2.295 373.8 5.379 384 16.01 384H64v112c0 8.8 7.16 16 16 16s16-7.2 16-16V384h64v112c0 8.844 7.156 16 16 16s16-7.156 16-16V384h47.99c10.61 0 18.31-10.2 15.41-20.4zM37.22 352 76.3 215.2c3.93-13.7 16.49-23.2 30.8-23.2h41.85c14.29 0 26.84 9.471 30.77 23.21L218.8 352H37.22zM128 128c35.38 0 64-28.62 64-64S163.4 0 128 0 63.1 28.62 63.1 64s29.53 64 64.9 64zm0-96c17.64 0 32 14.36 32 32s-14.36 32-32 32-32-14.36-32-32 14.4-32 32-32z" />
  </svg>
);

const SvgPersonDressSimple = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgPersonDressSimple;
