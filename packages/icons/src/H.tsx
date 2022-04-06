import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" {...props}>
    <path d="M384 48v416c0 8.844-7.156 16-16 16s-16-7.2-16-16V256H32v208c0 8.8-7.16 16-16 16s-16-7.2-16-16V48c0-8.84 7.156-16 16-16s16 7.16 16 16v176h320V48c0-8.84 7.2-16 16-16s16 7.16 16 16z" />
  </svg>
);

const SvgH = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgH;
