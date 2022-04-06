import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M288 162.3V0h-64v162.3C108.5 176.55 16.5 265.8.3 379.7c-2.606 19.1 12.74 35.4 32.11 35.4h447.1c19.38 0 34.81-17.19 32.19-36.31C495.4 265.8 403.5 176.5 288 162.3zm-32 348.8c35.38 0 64.01-28.62 64.01-64H192c0 36.3 28.6 64 64 64z" />
  </svg>
);

const SvgLightCeilingSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgLightCeilingSolid;
