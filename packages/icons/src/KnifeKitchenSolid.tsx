import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" {...props}>
    <path d="M267.5 216.6 4.888 469.9c-8.75 8.375-5.25 22.62 6.5 26.5 113.9 36.5 239.4 7.999 324.2-73.87l60.1-58.87c6.5-6.25 6.5-16.37 0-22.62L267.5 216.6zM566.3 43.24 531.18 9.36c-12.1-12.5-33.1-12.5-46.1 0l-192.2 185.4 111.1 108.1 34.37-27.75c6.25-5.1 9.75-14.12 9.75-22.62V207.1L566.3 87.7c12.9-11.58 12.9-31.96 0-44.46zm-123 112.06c-6.255 6.25-16.36 6.25-22.62 0-6.256-6.25-6.256-16.37 0-22.62 6.255-6.25 16.36-6.25 22.62 0 6.3 6.22 6.3 16.42 0 22.62zm64-64c-6.256 6.25-16.36 6.25-22.62 0-6.255-6.25-6.255-16.37 0-22.62 6.256-6.25 16.36-6.25 22.62 0 6.3 6.25 6.3 16.5 0 22.62z" />
  </svg>
);

const SvgKnifeKitchenSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgKnifeKitchenSolid;
