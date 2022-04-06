import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" {...props}>
    <path d="M64 208c0-26.5 21.49-48 48-48h288c26.5 0 48 21.5 48 48v96c0 26.5-21.5 48-48 48H112c-26.51 0-48-21.5-48-48v-96zm32 0v96c0 8.8 7.2 16 16 16h288c8.8 0 16-7.2 16-16v-96c0-8.8-7.2-16-16-16H112c-8.8 0-16 7.2-16 16zM0 176c0-44.2 35.82-80 80-80h352c44.2 0 80 35.8 80 80v160c0 44.2-35.8 80-80 80H80c-44.18 0-80-35.8-80-80V176zm80-48c-26.51 0-48 21.5-48 48v160c0 26.5 21.49 48 48 48h352c26.5 0 48-21.5 48-48V176c0-26.5-21.5-48-48-48H80zm496 176c0 8.8-7.2 16-16 16s-16-7.2-16-16v-96c0-8.8 7.2-16 16-16s16 7.2 16 16v96z" />
  </svg>
);

const SvgBatteryFull = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgBatteryFull;
