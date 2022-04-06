import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M488 384H24L4.96 460.13C2.432 470.2 10.08 480 20.48 480h471c10.4 0 18.05-9.793 15.52-19.87L488 384zM32 96h448c17.66 0 32-14.34 32-32s-14.34-32-32-32H32C14.34 32 0 46.34 0 64s14.34 32 32 32zm456 32H24L4.961 204.1C2.432 214.2 10.08 224 20.48 224h471c10.4 0 18.05-9.793 15.52-19.87L488 128zm0 128H24L4.96 332.13C2.432 342.2 10.08 352 20.48 352h471c10.4 0 18.05-9.793 15.52-19.87L488 256z" />
  </svg>
);

const SvgShuttersSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgShuttersSolid;
