import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
    <path d="M432 448H16c-8.836 0-16 7.2-16 16v32c0 8.836 7.151 15.99 15.99 15.99h416C440.8 511.1 448 504.8 448 496v-32c0-8.8-7.2-16-16-16zM416 64c0-35.35-28.65-64-64-64H96C60.65 0 32 28.65 32 64v352h384V64zM112 96c-8.8 0-16-7.16-16-16s7.2-16 16-16 16 7.16 16 16-7.2 16-16 16zm224 0c-8.8 0-16-7.16-16-16s7.2-16 16-16 16 7.16 16 16-7.2 16-16 16z" />
  </svg>
);

const SvgPedestalSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgPedestalSolid;
