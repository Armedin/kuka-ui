import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M500.3 443.7 380.6 324c27.22-40.41 40.65-90.9 33.46-144.7-12.23-91.55-87.28-166-178.9-177.6C98.96-15.54-15.54 98.98 1.76 235.1c11.6 91.64 86.07 166.7 177.6 178.9 53.81 7.191 104.3-6.235 144.7-33.46l119.7 119.7c15.62 15.62 40.95 15.62 56.57 0 15.57-15.54 15.57-40.94-.03-56.54zM288 232h-56.9v56c0 13.26-10.74 24-23.1 24-13.3 0-24-10.7-24-24v-56h-56.9c-12.4 0-23.1-10.7-23.1-24s10.74-24 23.1-24H184v-56c0-13.26 10.74-24 23.1-24s24 10.7 24 24v56h56c14.2 0 24.9 10.7 24.9 24s-10.7 24-24 24z" />
  </svg>
);

const SvgMagnifyingGlassPlusSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgMagnifyingGlassPlusSolid;