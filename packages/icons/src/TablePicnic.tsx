import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M410.4 288c-11.43 0-19.17 11.63-14.75 22.17l53.59 128C451.8 444.3 457.8 448 464 448a16.1 16.1 0 0 0 6.188-1.25c8.156-3.406 11.97-12.78 8.562-20.94l-53.58-127.1C422.7 291.9 416.9 288 410.4 288zM33.25 425.8c-3.406 8.156.406 17.53 8.562 20.94A15.81 15.81 0 0 0 48 448c6.25 0 12.19-3.688 14.75-9.812L116.3 310.2c4.4-10.6-3.3-22.2-14.7-22.2-6.46 0-12.28 3.9-14.77 9.8l-53.58 128zM496 224H394.2L340.64 96H432c8.8 0 16-7.16 16-16s-7.2-16-16-16H80c-8.84 0-16 7.16-16 16s7.16 16 16 16h91.31L117.8 224H16c-8.836 0-16 7.2-16 16s7.164 16 16 16h480c8.8 0 16-7.2 16-16s-7.2-16-16-16zm-343.6 0 53.58-128h100l53.58 128H152.4z" />
  </svg>
);

const SvgTablePicnic = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgTablePicnic;
