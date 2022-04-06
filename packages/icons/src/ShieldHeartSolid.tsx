import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M256.3-.007c5.6-.044 11 1.393 15.8 4.073L476.5 90.53c11.2 4.74 18.7 14.57 19.4 27.57 5.7 95.5-29.2 303.8-223.4 389.6-4.9 2.8-11.4 4.4-16.2 4.3-5.8.1-11.4-1.5-17.2-4.3C45.8 421.9 10.95 213.6 16.57 118.1c.71-13 8.26-22.83 19.47-27.57L240.4 4.066c4.8-2.68 10.3-4.117 15.9-4.073zm9.8 363.407 98.1-99.8c28-28.9 26.3-77-6.1-104.1-26.3-23.7-66.6-19.3-92 7l-9.7 9.6-10.5-9.6c-24.5-26.3-65.7-30.7-92.9-7-31.5 27.1-33.2 75.2-5.2 104.1l96.4 99.8c7 6.1 16.6 6.1 21.9 0z" />
  </svg>
);

const SvgShieldHeartSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgShieldHeartSolid;
