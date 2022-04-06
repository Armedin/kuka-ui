import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" {...props}>
    <path d="M96 64V24c0-13.25 10.7-24 24-24h80c13.3 0 24 10.75 24 24v40h16c8.8 0 16 7.16 16 16s-7.2 16-16 16H80c-8.84 0-16-7.16-16-16s7.16-16 16-16h16zm96 0V32h-64v32h64zm112 192v96c0 26.5-21.5 48-48 48s-48-21.5-48-48v-96c0-26.5 21.5-48 48-48s48 21.5 48 48zm-64 96c0 8.8 7.2 16 16 16s16-7.2 16-16v-96c0-8.8-7.2-16-16-16s-16 7.2-16 16v96zm16-224c70.7 0 128 57.3 128 128v192c0 35.3-28.7 64-64 64H64c-35.35 0-64-28.7-64-64V256c0-70.7 57.31-128 128-128h128zm-128 32c-53.02 0-96 42.1-96 96v192c0 17.7 14.33 32 32 32h256c17.7 0 32-14.3 32-32V256c0-53.9-43-96-96-96H128z" />
  </svg>
);

const SvgJugDetergent = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgJugDetergent;
