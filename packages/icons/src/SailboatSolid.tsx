import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" {...props}>
    <path d="M256 16A15.96 15.96 0 0 1 267.2.741c6.7-2.099 13.9.364 17.9 6.085l224 319.974c3.4 4.9 3.8 11.3 1.1 16.6-2.8 5.3-9.1 8.6-14.2 8.6H272c-8.8 0-16-7.2-16-16V16zm-43.9 80.54c7 1.86 11.9 8.16 11.9 15.46v224c0 8.8-7.2 16-16 16H80c-5.7 0-10.98-3.9-13.84-8-2.86-4.9-2.88-11-.05-15.9l127.99-224c3.6-6.34 11-9.42 18-7.56zM5.718 404.3C2.848 394.1 10.52 384 21.12 384H554.9c10.6 0 18.3 10.1 15.4 20.3l-4 14.4C550.7 473.9 500.4 512 443 512H132.1c-56.48 0-106.83-38.1-122.353-93.3l-4.029-14.4z" />
  </svg>
);

const SvgSailboatSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgSailboatSolid;
