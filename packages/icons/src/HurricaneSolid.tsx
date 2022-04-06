import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
    <path d="M224 223.1c-17.75 0-32 14.25-32 32s14.25 32 32 32 32-14.25 32-32c0-16.9-14.2-32-32-32zM208 95.98l24.5-74.74c3.75-11.25-5.615-22.49-17.36-21.11C112 12.38 32 101.6 32 208c0 114.9 93.13 208 208 208l-24.5 74.73c-3.75 11.25 5.615 22.5 17.36 21.12C335.1 499.6 416 410.4 416 304c0-114.9-93.1-208.02-208-208.02zm16 255.12c-53 0-96-43-96-96s43-96 96-96 96 43 96 96-43 96-96 96z" />
  </svg>
);

const SvgHurricaneSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgHurricaneSolid;
