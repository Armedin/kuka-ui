import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M432 287.1c-8.875 0-16 7.123-16 15.1s7.125 16 16 16 16-5.3 16-15.1-7.1-16-16-16zm-352 0c-8.875 0-16 7.125-16 16s7.125 15.1 16 15.1 16-5.3 16-15.1-7.12-16-16-16zm352 160c8.875 0 16-7.125 16-16s-7.125-16-16-16-16 8-16 16 7.1 16 16 16zM472 224H40c-22.09 0-40 17.9-40 40v208c0 22.1 17.91 40 40 40h432c22.09 0 40-17.91 40-40V264c0-22.1-17.9-40-40-40zm8 240c0 8.836-7.164 16-16 16H48c-8.84 0-16-7.2-16-16v-80h448v80zm0-112H32v-80c0-8.8 7.16-16 16-16h416c8.8 0 16 7.2 16 16v80zM80 447.1c8.875 0 16-7.126 16-16s-7.125-16-16-16-16 8-16 16 7.13 16 16 16z" />
  </svg>
);

const SvgCrateEmpty = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgCrateEmpty;
