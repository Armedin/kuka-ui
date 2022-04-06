import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" {...props}>
    <path d="M272 32h96.6c19.5 0 37.9 8.84 50 24.02L527.4 192H576c17.7 0 32 14.3 32 32v64c17.7 0 32 14.3 32 32s-14.3 32-32 32h-33.1c.7 5.2 1.1 10.6 1.1 16 0 61.9-50.1 112-112 112s-112-50.1-112-112c0-5.4.4-10.8 1.1-16h-66.2c.7 5.2 1.1 10.6 1.1 16 0 61.9-50.1 112-112 112S64 429.9 64 368c0-5.4.39-10.8 1.13-16H32c-17.67 0-32-14.3-32-32s14.33-32 32-32v-64c0-17.7 14.33-32 32-32h160V80c0-26.51 21.5-48 48-48zm96.6 64H288v96h157.4l-76.8-96zM176 416c26.5 0 48-21.5 48-48s-21.5-48-48-48-48 21.5-48 48 21.5 48 48 48zm288 0c26.5 0 48-21.5 48-48s-21.5-48-48-48-48 21.5-48 48 21.5 48 48 48z" />
  </svg>
);

const SvgTruckPickupSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgTruckPickupSolid;
