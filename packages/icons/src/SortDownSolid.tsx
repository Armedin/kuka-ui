import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" {...props}>
    <path d="M311.9 335.1 179.5 471.9c-5.4 5.4-12.4 8.1-19.5 8.1-7.055 0-14.12-2.702-19.47-8.109l-132.4-136.8C-9.229 317.8 3.055 288 27.66 288h264.7c24.54 0 36.84 29.8 19.54 47.1z" />
  </svg>
);

const SvgSortDownSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgSortDownSolid;
