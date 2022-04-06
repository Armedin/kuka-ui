import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M400.6 208 504.5 84.6c8.018-9.52 9.788-22.82 4.538-34.11S492.4 32 480 32H32V16c0-8.836-7.16-16-16-16S0 7.164 0 16v480c0 8.8 7.164 16 16 16s16-7.2 16-16V384h448a31.996 31.996 0 0 0 24.471-52.61L400.6 208zM32 352V64h448L358.7 208 480 352H32z" />
  </svg>
);

const SvgFlagSwallowtail = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgFlagSwallowtail;
