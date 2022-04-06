import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" {...props}>
    <path d="M192 16v48c52.3 0 99.8 20.95 134.4 54.9 6.3 6.2 6.4 16.3.2 22.6-6.2 6.3-16.3 6.4-22.6.2C275.1 113.4 235.6 96 192 96v144h176c8.8 0 16 7.2 16 16 0 106-86 192-192 192v48c0 8.8-7.2 16-16 16s-16-7.2-16-16v-50.7C69.19 430.1 0 351.1 0 256 0 160.9 69.19 81.89 160 66.65V16c0-8.836 7.2-16 16-16s16 7.164 16 16zm-32 83.2C86.97 114 32 178.6 32 256s54.97 141.1 128 156.8V99.2zM192 416c82.1 0 151.2-63.1 159.2-144H192v144z" />
  </svg>
);

const SvgGuaraniSign = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgGuaraniSign;
