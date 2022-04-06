import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M480 160c0-70.75-57.25-128-128-128-38.5 0-72.5 17.25-96 44.12C232.5 49.25 198.5 32 160 32 89.25 32 32 89.25 32 160c0 38.5 17.25 72.5 44.13 96C49.25 279.5 32 313.5 32 352c0 70.75 57.25 128 128 128 38.5 0 72.5-17.25 96-44.13C279.5 462.8 313.5 480 352 480c70.75 0 128-57.25 128-128 0-38.5-17.25-72.5-44.13-96C462.8 232.5 480 198.5 480 160zM256 336c-44.12 0-80-35.88-80-80s35.9-80 80-80 80 35.88 80 80-35.9 80-80 80z" />
  </svg>
);

const SvgFlowerSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgFlowerSolid;
