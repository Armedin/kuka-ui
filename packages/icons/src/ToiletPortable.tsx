import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" {...props}>
    <path d="M320 64v432c0 8.8-7.2 16-16 16s-16-7.2-16-16v-16H32v16c0 8.8-7.16 16-16 16-8.836 0-16-7.2-16-16V64C0 28.65 28.65 0 64 0h192c35.3 0 64 28.65 64 64zM32 96h256V64c0-17.67-14.3-32-32-32H64c-17.67 0-32 14.33-32 32v32zm0 32v320h256V336h-24c-22.1 0-40-17.9-40-40v-48c0-22.1 17.9-40 40-40h24v-80H32zm224 120v48c0 4.4 3.6 8 8 8h24v-64h-24c-4.4 0-8 3.6-8 8z" />
  </svg>
);

const SvgToiletPortable = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgToiletPortable;
