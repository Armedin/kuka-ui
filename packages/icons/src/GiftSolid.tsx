import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M152 0h2.2c31.9 0 61.5 16.91 77.7 44.45L256 85.46l24.1-41.01C296.3 16.91 325.9 0 357.8 0h2.2c48.6 0 88 39.4 88 88 0 14.4-3.5 27.1-9.6 40H480c17.7 0 32 14.3 32 32v64c0 17.7-14.3 32-32 32H32c-17.67 0-32-14.3-32-32v-64c0-17.7 14.33-32 32-32h41.6c-6.14-12.9-9.6-25.6-9.6-40 0-48.6 39.4-88 88-88zm38.5 68.78C182.9 55.91 169.1 48 154.2 48H152c-22.1 0-40 17.91-40 40 0 22.1 17.9 40 40 40h73.3l-34.8-59.22zM360 48h-2.2c-14.9 0-28.7 7.91-36.3 20.78L286.7 128H360c22.1 0 40-17.9 40-40 0-22.09-17.9-40-40-40zM32 288h192v224H80c-26.51 0-48-21.5-48-48V288zm256 224V288h192v176c0 26.5-21.5 48-48 48H288z" />
  </svg>
);

const SvgGiftSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgGiftSolid;
