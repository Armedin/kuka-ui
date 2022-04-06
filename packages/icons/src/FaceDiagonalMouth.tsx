import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M148.4 383.4c-8.5 2.4-17.4-2.5-19.8-11-2.4-8.5 2.5-17.4 11-19.8l224-64c8.5-2.4 16.5 2.5 19.8 11 2.4 8.5-2.5 16.5-11 19.8l-224 64zm52-175.4c0 13.3-10.8 24-24 24-13.3 0-24-10.7-24-24s10.7-24 24-24c13.2 0 24 10.7 24 24zm112 0c0-13.3 10.7-24 24-24 13.2 0 24 10.7 24 24s-10.8 24-24 24c-13.3 0-24-10.7-24-24zM512 256c0 141.4-114.6 256-256 256S0 397.4 0 256 114.6 0 256 0s256 114.6 256 256zM256 32C132.3 32 32 132.3 32 256s100.3 224 224 224 224-100.3 224-224S379.7 32 256 32z" />
  </svg>
);

const SvgFaceDiagonalMouth = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgFaceDiagonalMouth;
