import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" {...props}>
    <path d="M127.1 32c0-17.67 15.2-32 32-32H544c17.7 0 32 14.33 32 32s-14.3 32-32 32H384v64h32c88.4 0 160 71.6 160 160v64c0 17.7-14.3 32-32 32H303.1c-9.2 0-18.7-4.7-24.7-12.8L191.1 256 47.19 198.1c-9.54-3.8-16.67-12-19.16-22L4.97 83.88C2.445 73.78 10.08 64 20.49 64H47.1c10.97 0 20.46 4.74 26.5 12.8l37.5 51.2h208V64h-160c-16.8 0-32-14.33-32-32zM384 320h128v-32c0-53.9-43-96-96-96h-32v128zm246.6 150.6-3.9 3.9c-24 24-56.5 37.5-90.5 37.5H255.1c-16.8 0-32-14.3-32-32s15.2-32 32-32h281.1c17 0 33.3-6.7 45.3-18.7l3.9-3.9c12.5-12.5 32.7-12.5 45.2 0s12.5 32.7 0 45.2z" />
  </svg>
);

const SvgHelicopterSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgHelicopterSolid;
