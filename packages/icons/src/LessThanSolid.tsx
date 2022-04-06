import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" {...props}>
    <path d="M351.1 448a32.075 32.075 0 0 1-14.28-3.375l-320-160C6.844 279.2 0 268.1 0 256c0-12.13 6.844-23.18 17.69-28.62l320-160c15.88-7.875 35.05-1.5 42.94 14.31 7.906 15.81 1.5 35.03-14.31 42.94L103.5 256l262.8 131.4c15.81 7.906 22.22 27.12 14.31 42.94C375 441.5 363.7 448 351.1 448z" />
  </svg>
);

const SvgLessThanSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgLessThanSolid;
