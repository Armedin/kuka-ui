import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M199.1 272c0-8.8 8.1-16 16-16 9.7 0 16 7.2 16 16s-6.3 16-16 16c-7.9 0-16-7.2-16-16zm112.9 0c0 8.8-7.2 16-16 16s-16-7.2-16-16 7.2-16 16-16 16 7.2 16 16zM256.3-.007c5.6-.044 11 1.393 15.8 4.073L476.5 90.53c11.2 4.74 18.7 14.57 19.4 27.57 5.7 95.5-29.2 303.8-223.4 389.6-4.9 2.8-11.4 4.4-16.2 4.3-5.8.1-11.4-1.5-17.2-4.3C45.8 421.9 10.95 213.6 16.57 118.1c.71-13 8.26-22.83 19.47-27.57L240.4 4.066c4.8-2.68 10.3-4.117 15.9-4.073zM223.1 208l-64-64v128c0 53 43 96 96 96 53.9 0 96.9-43 96.9-96V144l-64 64h-64.9z" />
  </svg>
);

const SvgShieldCatSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgShieldCatSolid;
