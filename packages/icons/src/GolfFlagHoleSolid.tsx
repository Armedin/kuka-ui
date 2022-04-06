import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M256 320c-27.96 0-54.81 1.74-80 4.848v-82.11l198.4-99.21C380.8 140.3 384 134.2 384 128s-3.194-12.31-9.585-15.51L153.1 1.853C150.561.584 147.924 0 145.354 0 136.2 0 128 7.31 128 17.36v315.6C51.55 349.6 0 380.5 0 416c0 53.02 114.6 96 256 96s256-42.98 256-96-114.6-96-256-96zm-32 128c-35.35 0-64-14.33-64-32s28.65-32 64-32 64 14.33 64 32c0 17.7-28.7 32-64 32z" />
  </svg>
);

const SvgGolfFlagHoleSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgGolfFlagHoleSolid;
