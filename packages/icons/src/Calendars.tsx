import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M208 0c8.8 0 16 7.164 16 16v48h160V16c0-8.836 7.2-16 16-16s16 7.164 16 16v48h32c35.3 0 64 28.65 64 64v224c0 35.3-28.7 64-64 64H160c-35.3 0-64-28.7-64-64V128c0-35.35 28.7-64 64-64h32V16c0-8.836 7.2-16 16-16zm-80 128v32h352v-32c0-17.7-14.3-32-32-32H160c-17.7 0-32 14.3-32 32zm0 64v160c0 17.7 14.3 32 32 32h288c17.7 0 32-14.3 32-32V192H128zM32 384c0 53 42.98 96 96 96h240c8.8 0 16 7.2 16 16s-7.2 16-16 16H128C57.31 512 0 454.7 0 384V208c0-8.8 7.164-16 16-16 8.84 0 16 7.2 16 16v176z" />
  </svg>
);

const SvgCalendars = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgCalendars;
