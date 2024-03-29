import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M215.1 159.1c-39.75 0-72.01 32.25-72.01 72 0 8.876 7.126 16 16 16 8.876 0 16-7.126 16-16 0-22.13 17.88-40 40-40 8.876 0 16-7.126 16-16s-6.29-16-15.99-16zm263.3-8.6c-39.5-40.75-100.8-46.38-144.5-82.25-49.76-41-88.13-77.5-158.5-66.13-86.76 14-111.8 80-125 157.1-11.13 64.38-54.38 127-50 192.9s52.88 128.5 115 150.8c93.01 33.38 146.9-31.75 204.6-86.38 43.63-41.5 93.38-37.75 140.9-74 56.3-42.74 71.7-141.44 17.5-192.04zM223.1 352.4c-61.76 0-112-50.25-112-112.1 0-61.75 50.26-112.1 112-112.1s112 50.38 112 112.1c0 61.8-49.4 112.1-112 112.1z" />
  </svg>
);

const SvgEggFriedSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgEggFriedSolid;
