import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M231.1 272c0 8.8-6.3 16-16 16-7.9 0-16-7.2-16-16s8.1-16 16-16c9.7 0 16 7.2 16 16zm48.9 0c0-8.8 7.2-16 16-16s16 7.2 16 16-7.2 16-16 16-16-7.2-16-16zm-49.4-80h50.8l59.3-59.3c4.6-4.6 11.4-6 17.4-3.5 6 2.5 9.9 8.3 9.9 14.8v128c0 61.9-50.1 112-112.9 112-61 0-112-50.1-112-112V144c0-6.5 4.8-12.3 10.8-14.8 6-2.5 12.8-1.1 17.4 3.5l59.3 59.3zm24.5 160c45.1 0 80.9-35.8 80.9-80v-89.4l-36.7 36.7c-3 3-7.1 4.7-11.3 4.7h-64.9c-3.3 0-7.4-1.7-10.4-4.7l-37.6-36.7V272c0 44.2 36.7 80 80 80zM476.5 90.53c11.2 4.74 18.7 14.57 19.4 27.57 5.7 95.5-29.2 303.8-223.4 389.6-4.9 2.8-11.4 4.4-16.2 4.3-5.8.1-11.4-1.5-17.2-4.3C45.8 421.9 10.95 213.6 16.57 118.1c.71-13 8.26-22.83 19.47-27.57L240.4 4.066c4.8-2.68 10.3-4.117 15.9-4.073 5.6-.044 11 1.393 15.8 4.073L476.5 90.53zM255.1 32.01c-1 .56-1.2 1.07-2.2 1.53L48.51 120c-5.3 90.1 28.41 280.7 204.39 358.4.2.5 1.2 1 2.2.7 0 .9.9.9.9.9h.5v-.9c1 .3 2-.2 3.1-.7 176-77.7 209.7-268.3 203.5-358.4L259.7 33.54c-1.1-.45-2.2-.96-3.2-1.53h-1.4z" />
  </svg>
);

const SvgShieldCat = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgShieldCat;
