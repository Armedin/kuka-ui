import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" {...props}>
    <path d="M256 448h-31.99L224 255.8h-64.9L160 448h-32.9c-28.38 0-55.01 18.5-63.26 44.13C61.49 502 69.78 512 80.16 512h223.7c10.38 0 18.67-9.1 15.42-19.88C311 466.5 284.4 448 256 448zm125.4-268.6-68.63-160C307.8 7.625 296.3 0 283.4 0H100.6C87.72 0 76.22 7.625 71.22 19.38l-68.63 160c-4.235 9.82-3.234 21.22 2.641 30.22 5.999 9 15.999 14.4 26.749 14.4h320c10.75 0 20.75-5.375 26.75-14.38 5.87-9.02 6.87-20.42 2.67-30.22z" />
  </svg>
);

const SvgLampFloorSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgLampFloorSolid;
