import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" {...props}>
    <path d="M16 480c-8.844 0-16-7.2-16-16V48c0-8.84 7.156-16 16-16h160c79.4 0 144 64.59 144 144s-64.6 144-144 144H32v144c0 8.8-7.16 16-16 16zm16-192h144c61.8 0 112-50.2 112-112S237.8 64 176 64H32v224z" />
  </svg>
);

const SvgP = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgP;
