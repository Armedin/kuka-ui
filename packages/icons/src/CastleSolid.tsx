import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" {...props}>
    <path d="M128 16c0-8.836 7.2-16 16-16h32c8.8 0 16 7.164 16 16v48h48V16c0-8.836 7.2-16 16-16h32c8.8 0 16 7.164 16 16v48h32V16c0-8.836 7.2-16 16-16h32c8.8 0 16 7.164 16 16v48h48V16c0-8.836 7.2-16 16-16h32c8.8 0 16 7.164 16 16v208h64v-48c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16v288c0 26.5-21.5 48-48 48H384V384c0-35.3-28.7-64-64-64s-64 28.7-64 64v128H48c-26.51 0-48-21.5-48-48V176c0-8.8 7.164-16 16-16h32c8.84 0 16 7.2 16 16v48h64V16z" />
  </svg>
);

const SvgCastleSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgCastleSolid;
