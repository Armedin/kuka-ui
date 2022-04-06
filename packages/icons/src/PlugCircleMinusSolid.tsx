import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" {...props}>
    <path d="M96 0c17.7 0 32 14.33 32 32v96H64V32C64 14.33 78.33 0 96 0zm192 0c17.7 0 32 14.33 32 32v96h-64V32c0-17.67 14.3-32 32-32zm64 160c17.7 0 32 14.3 32 32 0 2.3-.3 4.6-.7 6.8C309.8 219.1 256 287.7 256 368c0 11.4 1.1 22.5 3.1 33.3-11 5.1-22.8 9-35.1 11.5V512h-64v-99.2C86.97 397.1 32 333.4 32 256v-32c-17.67 0-32-14.3-32-32s14.33-32 32-32h320zm224 208c0 79.5-64.5 144-144 144s-144-64.5-144-144 64.5-144 144-144 144 64.5 144 144zm-80-16.9H368c-8.8 0-16 8.1-16 16 0 9.7 7.2 16 16 16h128c8.8 0 16-6.3 16-16 0-7.9-7.2-16-16-16z" />
  </svg>
);

const SvgPlugCircleMinusSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgPlugCircleMinusSolid;
