import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M511.9 336.9C502 435 405.6 512 288.1 512h-64.2C106.4 512 10 435 .1 336.9-.914 327.8 6.962 320 16.09 320h47.26c63.01 0 119.9 22.25 160.6 57.88L223.1 256c-69.9 0-127.12-57.2-127.12-128V32l80.01 48L257.1 0l78.89 80L416 32v96c0 70.75-57.26 128-128 128v121.9c40.8-35.7 97.6-57.9 160.7-57.9h47.26c9.04 0 16.94 7.8 15.94 16.9z" />
  </svg>
);

const SvgFlowerTulipSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgFlowerTulipSolid;
