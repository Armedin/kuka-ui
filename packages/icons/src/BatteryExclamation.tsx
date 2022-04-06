import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" {...props}>
    <path d="M208 128H80c-26.51 0-48 21.5-48 48v160c0 26.5 21.49 48 48 48h128.5c.6 12 6.3 23 13.5 32H80c-44.18 0-80-35.8-80-80V176c0-44.2 35.82-80 80-80h128v32zm128-32h96c44.2 0 80 35.8 80 80v160c0 44.2-35.8 80-80 80H321.1c8.1-9 12.9-20 14.4-32H432c26.5 0 48-21.5 48-48V176c0-26.5-21.5-48-48-48h-96V96zm224 96c8.8 0 16 7.2 16 16v96c0 8.8-7.2 16-16 16s-16-7.2-16-16v-96c0-8.8 7.2-16 16-16zM296 376c0 13.3-10.7 24-24 24s-24-10.7-24-24 10.7-24 24-24 24 10.7 24 24zm-8-72c0 8.8-7.2 16-16 16s-16-7.2-16-16V112c0-8.8 7.2-16 16-16s16 7.2 16 16v192z" />
  </svg>
);

const SvgBatteryExclamation = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgBatteryExclamation;
