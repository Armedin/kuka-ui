import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" {...props}>
    <path d="M384 256c0-17.7 14.3-32 32-32s32 14.3 32 32-14.3 32-32 32-32-14.3-32-32zm-64 0c0-53.9 42.1-96 96-96 53 0 96 42.1 96 96 0 53-43 96-96 96-53.9 0-96-43-96-96zm96 64c35.3 0 64-28.7 64-64s-28.7-64-64-64-64 28.7-64 64 28.7 64 64 64zm0-224c88.4 0 160 71.6 160 160s-71.6 160-160 160H160C71.63 416 0 344.4 0 256S71.63 96 160 96h256zm0 32H160c-70.69 0-128 57.3-128 128s57.31 128 128 128h256c70.7 0 128-57.3 128-128s-57.3-128-128-128z" />
  </svg>
);

const SvgToggleOn = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgToggleOn;
