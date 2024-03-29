import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M503.2 393.8 280.1 44.25c-10.42-16.33-37.73-16.33-48.15 0L8.807 393.8a55.906 55.906 0 0 0-1.666 57.45C17.07 468.1 35.92 480 56.31 480h399.4c20.39 0 39.24-11.03 49.18-28.77 10.01-18.03 9.41-40.03-1.69-57.43zM256 111.8 327.8 224H256l-48 64-30.8-52.7L256 111.8z" />
  </svg>
);

const SvgMountainSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgMountainSolid;
