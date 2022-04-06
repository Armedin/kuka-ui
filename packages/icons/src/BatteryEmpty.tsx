import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" {...props}>
    <path d="M432 96c44.2 0 80 35.8 80 80v160c0 44.2-35.8 80-80 80H80c-44.18 0-80-35.8-80-80V176c0-44.2 35.82-80 80-80h352zM32 336c0 26.5 21.49 48 48 48h352c26.5 0 48-21.5 48-48V176c0-26.5-21.5-48-48-48H80c-26.51 0-48 21.5-48 48v160zm528-144c8.8 0 16 7.2 16 16v96c0 8.8-7.2 16-16 16s-16-7.2-16-16v-96c0-8.8 7.2-16 16-16z" />
  </svg>
);

const SvgBatteryEmpty = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgBatteryEmpty;
