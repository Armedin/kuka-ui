import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M304 384c8.8 0 16 7.2 16 16s-7.2 16-16 16h-96c-8.8 0-16-7.2-16-16s7.2-16 16-16h96zm105.6-116.8c7.1 5.3 8.5 15.3 3.2 22.4-30.4 40.5-91.2 40.5-121.6 0-5.3-7.1-3.9-17.1 3.2-22.4 7.1-5.3 17.1-3.9 22.4 3.2 17.6 23.5 52.8 23.5 70.4 0 5.3-7.1 15.3-8.5 22.4-3.2zm-284.8 3.2c17.6 23.5 52.8 23.5 70.4 0 5.3-7.1 15.3-8.5 22.4-3.2 7.1 5.3 8.5 15.3 3.2 22.4-30.4 40.5-91.2 40.5-121.6 0-5.3-7.1-3.87-17.1 3.2-22.4 7.1-5.3 17.1-3.9 22.4 3.2zm-43.11-55.2c-3.95-7.9-.75-17.6 7.15-21.5l22.86-11.4c14.5-7.3 27.2-17.6 37.4-30.2l14.4-18.1c5.5-6.9 15.6-8.9 21.6-2.5 7.8 5.5 8.9 15.6 3.4 21.6L174.1 172c-13.1 16.3-29.5 29.6-48.1 38.9l-22.8 11.4c-7.95 4-17.56.8-21.51-7.1zm341.51-21.5c7.9 3.9 11.1 13.6 7.1 21.5-3.9 7.9-13.6 11.1-21.5 7.1l-23.7-11.4c-17.7-9.3-35-22.6-47.2-38.9l-14.4-18.9c-6.4-6-4.4-16.1 2.5-21.6 6.9-6.4 16.1-4.4 22.5 2.5l14.4 18.1c10.2 12.6 22.9 22.9 37.4 30.2l22.9 11.4zM512 256c0 141.4-114.6 256-256 256S0 397.4 0 256 114.6 0 256 0s256 114.6 256 256zM256 32C132.3 32 32 132.3 32 256s100.3 224 224 224 224-100.3 224-224S379.7 32 256 32z" />
  </svg>
);

const SvgFacePensive = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgFacePensive;
