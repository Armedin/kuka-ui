import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" {...props}>
    <path d="M288 256c0 35.3-28.7 64-64 64s-64-28.7-64-64 28.7-64 64-64 64 28.7 64 64zm256 160c17.7 0 32 14.3 32 32s-14.3 32-32 32H224C100.3 480 0 379.7 0 256S100.3 32 224 32s224 100.3 224 224c0 62.7-25.7 119.3-67.2 160H544zm-320-64c53 0 96-43 96-96 0-53.9-43-96-96-96-53.9 0-96 42.1-96 96 0 53 42.1 96 96 96z" />
  </svg>
);

const SvgTapeSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgTapeSolid;
