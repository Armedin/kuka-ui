import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
    <path d="M448 336V48c0-26.51-21.5-48-48-48H96C42.98 0 0 42.98 0 96v320c0 53.02 42.98 96 96 96h320c17.67 0 32-14.33 32-31.1 0-11.72-6.607-21.52-16-27.1v-81.36c9.8-9.64 16-22.24 16-36.44zm-64 112H96c-17.67 0-32-14.33-32-32s14.33-32 32-32h120V209.9l-39.9 38.2c-9.375 9.375-24.56 9.375-33.94 0s-9.375-24.56 0-33.94l80-80c9.375-9.375 24.56-9.375 33.94 0l80 80c9.375 9.375 9.375 24.56 0 33.94-3.8 5.6-9.9 7.9-16.1 7.9s-12.28-2.344-16.97-7.031L264 209.9V384h120v64z" />
  </svg>
);

const SvgBookArrowUpSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgBookArrowUpSolid;
