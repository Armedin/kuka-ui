import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" {...props}>
    <path d="M224 0c13.3 0 24 10.74 24 23.1 0 14.15-10.7 24-24 24.9h-8v92.9c42.6 20.7 72 64.5 72 115.1v192c0 35.3-28.7 64-64 64H96c-35.35 0-64-28.7-64-64V256c0-50.6 29.37-94.4 72-115.1V48h-8c-13.25 0-24-10.74-24-24C71.1 10.75 82.74.005 95.1.004L224 0zm-64 384c26.5 0 48-16 48-48s-48-80-48-80-48 48-48 80c0 26.5 21.5 48 48 48z" />
  </svg>
);

const SvgBottleDropletSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgBottleDropletSolid;
