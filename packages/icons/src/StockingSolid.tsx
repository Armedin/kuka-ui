import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" {...props}>
    <path d="m96.02 251.5-39.01 26C-1.74 316.75-17.74 396.3 21.51 455c24.75 37 65.27 57 106.69 57 24.37 0 49.14-7 70.89-21.5L280.8 436c44.5-29.75 71.14-79.5 71.14-133.1L351.9 128H96.02v123.5zM351.1 0H96.01c-17.6 0-32 14.4-32 32v32c0 17.6 14.41 32 32 32h255.1C369.6 96 384 81.6 384 64V32c0-17.6-14.4-32-32.9-32z" />
  </svg>
);

const SvgStockingSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgStockingSolid;
