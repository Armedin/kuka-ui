import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M128.1 361.3 20.6 468.7l22.62 22.75 107.5-107.5-22.62-22.65zm-33.85-34L9.38 412.17c-12.5 12.5-12.5 32.75 0 45.25l107.5-107.5-22.63-22.62zM308.9 256H171.1c-4.25 0-8.25 1.75-11.25 4.75L105.5 315.9l90.62 90.62 124.1-123.1C330.5 273.4 323.3 256 308.9 256zM504.1 7.02c-9.123-9.125-23.87-9.375-33.37-.625L225.1 232h103.5L504.7 40.4c9.7-9.51 9.4-24.26-.6-33.38zM54.62 502.6c12.5 12.5 32.75 12.5 45.25 0l84.87-84.87-22.62-22.62L54.62 502.6z" />
  </svg>
);

const SvgSwordLaserAltSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgSwordLaserAltSolid;
