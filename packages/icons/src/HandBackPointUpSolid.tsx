import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
    <path d="M432 288v80c0 76.09-59.49 137.9-134.3 143-3.1.7-6.4 1-9.7 1H176c-45.09 0-88.16-21.53-115.2-57.61L41.61 428.8A47.97 47.97 0 0 1 32 400v-48c0-14.58 6.625-28.38 17.1-37.48l29.99-23.99V336c0 8.836 7.162 16 16 16 8.836 0 16.01-7.161 16.01-15.1L112 40c0-22.09 17.9-40 40-40s40 17.91 40 40v164.5c8.5-7.7 19.7-12.5 32-12.5 23.48 0 42.96 16.88 47.11 39.17C279.5 217.3 294.6 208 312 208c23.47 0 42.94 16.87 47.11 39.14C366.4 242.7 374.9 240 384 240c26.5 0 48 21.5 48 48z" />
  </svg>
);

const SvgHandBackPointUpSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgHandBackPointUpSolid;
