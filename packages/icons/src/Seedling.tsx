import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M80 96H16c-8.844 0-16 7.2-16 16 0 114.7 93.31 208 208 208h48v144c0 8.836 7.164 16 16 16s16-7.164 16-16V304c0-114.7-93.3-208-208-208zm128 192c-91.7 0-167.17-70.4-175.28-160H80c91.66 0 167.2 70.41 175.3 160H208zM496 32h-64c-66.75 0-129.9 32.41-168.1 86.66-6 7.14-4.4 17.14 2.8 22.34 7.141 5.125 17.16 3.5 22.33-3.656C322.1 91.41 375.5 64 432 64h47.27c-7.734 83.78-75.48 152.4-160.6 159.4-8.812.719-15.36 8.438-14.64 17.25.703 8.375 7.688 14.69 15.94 14.69.437 0 .89-.031 1.328-.063C428.2 246.5 512 155.4 512 48c0-8.84-7.2-16-16-16z" />
  </svg>
);

const SvgSeedling = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgSeedling;
