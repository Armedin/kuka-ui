import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" {...props}>
    <path d="M560 32H176c-26.5 0-48 21.49-48 48v1.311l212.5 164.1c16.2 12.6 38.87 12.6 55.06 0L608 81.31V80c0-26.51-21.5-48-48-48zM368 288c-16.53 0-33.06-5.484-47.16-16.47L128 121.3V336c0 26.5 21.5 48 48 48h384c26.51 0 48-21.49 48-48V121.3L415.2 271.5c-14.1 11-30.7 16.5-47.2 16.5zm120 192H152c-66.17 0-120-53.8-120-120V120c0-13.2 10.75-24 24-24s24 10.8 24 24v240c0 39.7 32.3 72 72 72h336c13.25 0 24 10.75 24 24s-10.7 24-24 24z" />
  </svg>
);

const SvgEnvelopesSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgEnvelopesSolid;
