import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" {...props}>
    <path d="M0 352c0 88.38 71.63 160 160 160h64c88.38 0 160-71.63 160-160V224H0v128zM176 0h-16C71.63 0 0 71.62 0 160v32h176V0zm48 0h-16v192h176v-32C384 71.62 312.4 0 224 0z" />
  </svg>
);

const SvgComputerMouseSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgComputerMouseSolid;
