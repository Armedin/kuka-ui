import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" {...props}>
    <path d="M64 511.1h256c35.38 0 64-28.62 64-64v-384c0-35.38-28.62-64-64-64H64c-35.38 0-64 28.62-64 64v384c0 36.3 28.63 64 64 64zM32 64c0-17.62 14.38-32 32-32h112v16c0 8.84 7.2 16 16 16s16-7.156 16-16V32h112c17.62 0 32 14.38 32 32v384c0 17.62-14.38 32-32 32H208v-16c0-8.844-7.156-16-16-16s-16 7.156-16 16v16H64c-17.62 0-32-14.38-32-32V64zm112 351.1h96c26.4 0 48-21.6 48-48v-224c0-26.4-21.6-48-48-48h-96c-26.4 0-48 21.6-48 48v223.1c0 28.2 21.6 48.9 48 48.9zM128 144c0-8.8 7.2-16 16-16h96c8.8 0 16 7.2 16 16v96H128v-96zm0 128h128v96c0 8.836-7.164 16-16 16h-96c-8.8 0-16-7.2-16-16v-96zm80-112h-32c-8.8 0-16 7.2-16 16s7.2 16 16 16h32c8.8 0 16-7.2 16-16s-7.2-16-16-16z" />
  </svg>
);

const SvgLightSwitchOn = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgLightSwitchOn;
