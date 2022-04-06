import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" {...props}>
    <path d="m374.6 310.6-160 160c-6.2 6.3-14.4 9.4-22.6 9.4s-16.38-3.125-22.62-9.375l-160-160a32.003 32.003 0 0 1-6.938-34.88A32.001 32.001 0 0 1 32 256h96V64c0-17.67 14.33-32 32-32h64c17.67 0 32 14.33 32 32v192h96c12.94 0 24.61 7.797 29.56 19.75 4.94 11.95 2.24 25.75-6.96 34.85z" />
  </svg>
);

const SvgDownSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgDownSolid;
