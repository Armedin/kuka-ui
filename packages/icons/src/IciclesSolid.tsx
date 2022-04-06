import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="m511.4 37.87-87.54 467.6c-1.625 8.623-14.04 8.634-15.67.01L341.4 141.7l-45.7 172.5c-2.375 7.624-12.98 7.624-15.36 0L246.3 180.9l-46.49 196.9c-1.875 8.373-13.64 8.373-15.51 0l-45.2-187.3-35.5 124c-2.375 7.124-12.64 7.198-15.14.074L1.357 41.24C-4.768 20.75 10.61 0 31.98 0h448C500 0 515.2 18.25 511.4 37.87z" />
  </svg>
);

const SvgIciclesSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgIciclesSolid;
