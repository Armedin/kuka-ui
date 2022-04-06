import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M0 256C0 114.6 114.6 0 256 0s256 114.6 256 256-114.6 256-256 256S0 397.4 0 256zm208 128c-8.8 0-16 7.2-16 16s7.2 16 16 16h96c8.8 0 16-7.2 16-16s-7.2-16-16-16h-96zm179.2-113.6c-17.6 23.5-52.8 23.5-70.4 0-5.3-7.1-15.3-8.5-22.4-3.2-7.1 5.3-8.5 15.3-3.2 22.4 30.4 40.5 91.2 40.5 121.6 0 5.3-7.1 3.9-17.1-3.2-22.4-7.1-5.3-17.1-3.9-22.4 3.2zm-284.8-3.2c-7.07 5.3-8.5 15.3-3.2 22.4 30.4 40.5 91.2 40.5 121.6 0 5.3-7.1 3.9-17.1-3.2-22.4-7.1-5.3-17.1-3.9-22.4 3.2-17.6 23.5-52.8 23.5-70.4 0-5.3-7.1-15.3-8.5-22.4-3.2zm-15.24-44.9L110 210.9c18.6-9.3 35-22.6 48.1-38.9l14.4-18.9c5.5-6 4.4-16.1-3.4-21.6-6-6.4-16.1-4.4-21.6 2.5l-14.4 18.1c-10.2 12.6-22.9 22.9-37.4 30.2l-22.86 11.4c-7.9 3.9-11.1 13.6-7.15 21.5 3.95 7.9 13.56 11.1 21.47 7.1zm329.14-40c-14.5-7.3-27.2-17.6-37.4-30.2L364.5 134c-6.4-6.9-15.6-8.9-22.5-2.5-6.9 5.5-8.9 15.6-2.5 21.6l14.4 18.9c12.2 16.3 29.5 29.6 47.2 38.9l23.7 11.4c7.9 4 17.6.8 21.5-7.1 4-7.9.8-17.6-7.1-21.5l-22.9-11.4z" />
  </svg>
);

const SvgFacePensiveSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgFacePensiveSolid;
