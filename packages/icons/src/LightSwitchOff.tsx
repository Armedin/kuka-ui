import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" {...props}>
    <path d="M320 0H64C28.62 0 0 28.62 0 64v384c0 35.38 28.62 64 64 64h256c35.38 0 64-28.62 64-64V64c0-35.38-28.6-64-64-64zm32 448c0 17.62-14.38 32-32 32H208v-16c0-8.844-7.156-16-16-16s-16 7.156-16 16v16H64c-17.62 0-32-14.38-32-32V64c0-17.62 14.38-32 32-32h112v16c0 8.84 7.2 16 16 16s16-7.156 16-16V32h112c17.62 0 32 14.38 32 32v384zM240 95.1h-96c-26.4 0-48 21.6-48 47.1v224c0 26.4 21.6 48 48 48h96c26.4 0 48-21.6 48-48v-224c0-24.6-21.6-47.1-48-47.1zM256 368c0 8.836-7.162 16-16 16h-96c-8.8 0-16-7.2-16-16v-96h128v96zm0-128H128v-96c0-8.8 7.2-16 16-16h96c8.8 0 16 7.2 16 16v96zm-80 112h32c8.844 0 16-7.156 16-16s-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16s7.2 16 16 16z" />
  </svg>
);

const SvgLightSwitchOff = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgLightSwitchOff;
