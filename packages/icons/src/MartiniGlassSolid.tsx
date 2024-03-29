import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M502 57.63C523.3 36.38 508.3 0 478.3 0H33.72C3.711 0-11.29 36.38 9.962 57.63l214 214V448H175.1c-26.51 0-47.1 21.49-47.1 48 0 8.836 7.164 16 16 16h224c8.836 0 16-7.164 16-16 0-26.51-21.49-48-48-48h-47.1V271.6L502 57.63zM405.1 64l-64.01 64H170.9l-64-64h298.2z" />
  </svg>
);

const SvgMartiniGlassSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgMartiniGlassSolid;
