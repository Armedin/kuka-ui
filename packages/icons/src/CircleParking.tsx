import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M288 320h-80v48c0 8.8-7.2 16-16 16s-16-7.2-16-16V152c0-13.3 10.7-24 24-24h88c53 0 96 42.1 96 96 0 53-43 96-96 96zm0-32c35.3 0 64-28.7 64-64s-28.7-64-64-64h-80v128h80zm224-32c0 141.4-114.6 256-256 256S0 397.4 0 256 114.6 0 256 0s256 114.6 256 256zM256 32C132.3 32 32 132.3 32 256s100.3 224 224 224 224-100.3 224-224S379.7 32 256 32z" />
  </svg>
);

const SvgCircleParking = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgCircleParking;
