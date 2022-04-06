import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M0 128c0-35.35 28.65-64 64-64h384c35.3 0 64 28.65 64 64v256c0 35.3-28.7 64-64 64H64c-35.35 0-64-28.7-64-64V128zm32 0v39.9l195.6 143.4c16.9 12.4 39.9 12.4 56.8 0L480 167.9V128c0-17.7-14.3-32-32-32H63.1c-16.77 0-32 14.3-32 32h.9zm0 79.6V384c0 17.7 14.33 32 32 32h384c17.7 0 32-14.3 32-32V207.6L303.3 337.1a79.817 79.817 0 0 1-94.6 0L32 207.6z" />
  </svg>
);

const SvgEnvelope = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgEnvelope;
