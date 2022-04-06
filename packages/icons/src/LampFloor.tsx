import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" {...props}>
    <path d="m381.4 179.4-68.63-160C307.8 7.625 296.3 0 283.4 0H100.6C87.72 0 76.22 7.625 71.22 19.38l-68.63 160a32.117 32.117 0 0 0 2.641 30.22c5.999 9 15.999 14.4 26.749 14.4H176v256H80c-8.84 0-16 7.2-16 16s7.32 16 16.16 16h223.7c8.84 0 16.14-7.2 16.14-16s-7.2-16-16-16h-96V224h144c10.75 0 20.75-5.375 26.75-14.38a32.298 32.298 0 0 0 2.65-30.22zM32.02 191.1 100.6 32h182.7l68.66 160-319.94-.9z" />
  </svg>
);

const SvgLampFloor = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgLampFloor;
