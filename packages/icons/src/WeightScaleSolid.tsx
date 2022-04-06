import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M310.3 97.25c-8-3.5-17.5.25-21 8.5L255.8 184c-22 .3-39.8 18-39.8 40 0 22.12 17.88 40 40 40s40-17.9 40-40c0-10.5-4.25-20-11-27.12l33.75-78.63c3.55-8.15-.35-17.45-8.45-21zM448 64h-56.23C359.5 24.91 310.7 0 256 0S152.5 24.91 120.2 64H64C28.75 64 0 92.75 0 128v320c0 35.25 28.75 64 64 64h384c35.25 0 64-28.75 64-64V128c0-35.25-28.7-64-64-64zM256 304c-70.58 0-128-57.42-128-128S185.42 48 256 48s128 57.42 128 128-57.4 128-128 128z" />
  </svg>
);

const SvgWeightScaleSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgWeightScaleSolid;
