import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" {...props}>
    <path d="M351.1 463.1c0 26.4 21.6 48 48 48s48-21.6 48-48v-16.19l-96-75.24v91.43zM80 383.1c-26.4 0-48 21.6-48 48v31.1c0 26.4 21.6 48 48 48s48-21.6 48-48v-31.1c0-25.5-21.6-48-48-48zm550.8 86-23.7-17.9V48c0-26.4-21.6-48-48-48s-48 21.6-48 48v327.1l-64-50.16V175.1c0-26.4-21.6-47.1-48-47.1s-48 21.6-48 48v74.58L38.81 5.111A23.956 23.956 0 0 0 24.03 0C16.905 0 9.84 3.158 5.12 9.189-3.068 19.63-1.25 34.72 9.187 42.89l591.1 463.1c10.5 8.203 25.57 6.328 33.69-4.078C643.1 492.4 641.2 477.3 630.8 469.1zM192 304v160c0 26.4 21.6 48 48 48s48-21.6 48-48V322.6l-74.6-58.5c-12.9 8.7-21.4 23.3-21.4 39.9z" />
  </svg>
);

const SvgSignalBarsSlashSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgSignalBarsSlashSolid;
