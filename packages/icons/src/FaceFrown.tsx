import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M139.3 399.3c-8.5-2.6-13.2-11.6-10.6-20C145.2 326.1 196.3 288 256 288c59.8 0 110.8 38.1 127.3 91.3 2.6 8.4-2.1 17.4-10.6 20-8.4 2.6-17.4-2.1-20-10.6-12.2-39.3-50.6-68.7-96.7-68.7s-84.5 29.4-96.7 68.7c-2.6 8.5-11.6 13.2-20 10.6zM200.4 208c0 13.3-10.8 24-24 24-13.3 0-24-10.7-24-24s10.7-24 24-24c13.2 0 24 10.7 24 24zm112 0c0-13.3 10.7-24 24-24 13.2 0 24 10.7 24 24s-10.8 24-24 24c-13.3 0-24-10.7-24-24zM512 256c0 141.4-114.6 256-256 256S0 397.4 0 256 114.6 0 256 0s256 114.6 256 256zM256 32C132.3 32 32 132.3 32 256s100.3 224 224 224 224-100.3 224-224S379.7 32 256 32z" />
  </svg>
);

const SvgFaceFrown = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgFaceFrown;
