import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M502 57.63C523.3 36.38 508.3 0 478.3 0H33.72C3.711 0-11.29 36.38 9.962 57.63l230 230V480H144c-8.836 0-15.1 7.164-15.1 16s7.164 16 16 16h224c8.838 0 16-7.164 16-16s-8.1-16-16.9-16h-95.1V287.6L502 57.63zM256 258.4 32 32h448L256 258.4z" />
  </svg>
);

const SvgMartiniGlassEmpty = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgMartiniGlassEmpty;
