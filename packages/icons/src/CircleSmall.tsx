import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" {...props}>
    <path d="M320 256c0 88.4-71.6 160-160 160C71.63 416 0 344.4 0 256S71.63 96 160 96c88.4 0 160 71.6 160 160zM160 128c-70.69 0-128 57.3-128 128s57.31 128 128 128c70.7 0 128-57.3 128-128s-57.3-128-128-128z" />
  </svg>
);

const SvgCircleSmall = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgCircleSmall;
