import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" {...props}>
    <path d="M568.1 201.7C521.6 124.6 419.6 64 375.1 64c0 0-29.37 0-87.99 45C229.4 64 200 64 200 64 156.4 64 54.4 124.6 7.942 201.7c-9.338 15.41-10.46 34.2-3.489 50.73C29.65 312.3 105.9 448 251.3 448h73.36c145.5 0 221.7-135.8 246.9-195.6 6.94-16.5 5.84-35.3-3.46-50.7zM288 320c-149.3 0-224.11-96-224.11-96s56.09-32 140.1-32l30.96 8.875C251.5 205.5 269.6 208 288 208s36.54-2.5 53.06-7.125L372 192c84 0 140.1 32 140.1 32s-74.8 96-224.1 96z" />
  </svg>
);

const SvgLipsSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgLipsSolid;
