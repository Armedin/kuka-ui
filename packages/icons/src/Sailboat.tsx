import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" {...props}>
    <path d="M509.1 326.8c3.4 4.9 3.8 11.3 1.1 16.6-2.8 5.3-9.1 8.6-14.2 8.6H271.1c-7.9 0-16-7.2-16-16V16c0-6.982 5.4-13.159 12.1-15.259 6.6-2.099 13.9.364 17.9 6.085l224 319.974zm-43.8-6.8L287.1 66.76V320h178.2zM212.1 96.54c7 1.86 11 8.16 11 15.46v224c0 8.8-6.3 16-16 16h-128c-4.8 0-10.08-3.9-12.94-8-2.86-4.9-2.88-11-.05-15.9l127.99-224c3.6-6.34 11-9.42 18-7.56zM107.6 320h83.5V172.3L107.6 320zm447.3 64c10.6 0 18.2 10.1 15.4 20.3l-4 14.4C550.7 473.9 500.4 512 443 512H132.1c-56.48 0-106.83-38.1-122.355-93.3l-4.029-14.4C2.846 394.1 10.52 384 21.12 384H554.9zM42.45 416c13.47 38.1 49.62 64 89.65 64H443c40.9 0 77.1-25.9 90.5-64H42.45z" />
  </svg>
);

const SvgSailboat = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgSailboat;
