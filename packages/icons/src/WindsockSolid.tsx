import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M128 96H64V32C64 14.33 49.67 0 32 0S0 14.33 0 32v464c0 8.8 7.164 16 16 16h32c8.84 0 16-7.2 16-16V320h64v44.8l80-16V67.2l-80-16V96zm0 176H64V144h64v128zm144 63.1 96-19.2V99.2L272 80v255.1zm220.7-211L432 112v191.1l60.71-12.14C503.9 289.6 512 279.8 512 268.3V147.7c0-11.5-8.1-21.3-19.3-23.6z" />
  </svg>
);

const SvgWindsockSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgWindsockSolid;
