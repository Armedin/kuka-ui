import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M80 240c0-22.1 17.91-40 40-40h272c22.1 0 40 17.9 40 40v32c0 22.1-17.9 40-40 40H120c-22.09 0-40-17.9-40-40v-32zm32 32c0 4.4 3.6 8 8 8h272c4.4 0 8-3.6 8-8v-32c0-4.4-3.6-8-8-8H120c-4.4 0-8 3.6-8 8v32zm400-16c0 141.4-114.6 256-256 256S0 397.4 0 256 114.6 0 256 0s256 114.6 256 256zM256 32C132.3 32 32 132.3 32 256s100.3 224 224 224 224-100.3 224-224S379.7 32 256 32z" />
  </svg>
);

const SvgDoNotEnter = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgDoNotEnter;
