import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" {...props}>
    <path d="M304 32c26.5 0 48 21.49 48 48v128c0 26.5-21.5 48-48 48h-42.8L144.3 454.6c-13.4 22.9-42.8 30.5-65.67 17.1l-53.41-31.5C2.431 426.8-5.225 397.5 8.098 374.7L80.03 251.4C33.75 237.6 0 194.7 0 144 0 82.14 50.14 32 112 32h192zm248 0c13.3 0 24 10.75 24 24v16c0 13.25-10.7 24-24 24H440c-13.3 0-24-10.75-24-24V56c0-13.25 10.7-24 24-24h112zM416 216c0-13.3 10.7-24 24-24h112c13.3 0 24 10.7 24 24v16c0 13.3-10.7 24-24 24H440c-13.3 0-24-10.7-24-24v-16zm136 200c13.3 0 24 10.7 24 24v16c0 13.3-10.7 24-24 24H440c-13.3 0-24-10.7-24-24v-16c0-13.3 10.7-24 24-24h112zM416 144c0-8.8 7.2-16 16-16h128c8.8 0 16 7.2 16 16s-7.2 16-16 16H432c-8.8 0-16-7.2-16-16zm144 144c8.8 0 16 7.2 16 16s-7.2 16-16 16H432c-8.8 0-16-7.2-16-16s7.2-16 16-16h128zm-144 80c0-8.8 7.2-16 16-16h128c8.8 0 16 7.2 16 16s-7.2 16-16 16H432c-8.8 0-16-7.2-16-16z" />
  </svg>
);

const SvgScannerGunSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgScannerGunSolid;