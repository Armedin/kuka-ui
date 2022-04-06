import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" {...props}>
    <path d="M16 208h160v160c0 8.844 7.156 16 16 16s16-7.156 16-16V208h160c8.8 0 16-7.2 16-16s-7.156-15.99-16-15.99L208 176V16c0-8.844-7.156-15.99-16-15.99S176 7.156 176 16v160l-160 .007C7.156 176 0 183.2 0 192s7.156 16 16 16zm352 272H16c-8.844 0-16 7.2-16 16s7.156 16 16 16h352c8.844 0 16-7.156 16-16s-7.2-16-16-16z" />
  </svg>
);

const SvgPlusMinus = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgPlusMinus;
