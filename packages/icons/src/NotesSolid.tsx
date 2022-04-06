import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="m384 480 96-96h-96v96zm48-384.9H144c-26.51 0-48 21.49-48 47.1v288c0 28.3 21.5 49.8 48 49.8h208l.014-96c0-17.6 14.4-32 32-32H480V143.1c0-25.6-21.5-48-48-48zM0 360V120C0 53.83 53.83 0 120 0h240c13.3 0 24 10.75 24 24s-10.7 24-24 24H120c-39.7 0-72 32.3-72 72v240c0 13.3-10.75 24-24 24S0 373.3 0 360z" />
  </svg>
);

const SvgNotesSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgNotesSolid;
