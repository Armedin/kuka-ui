import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" {...props}>
    <path d="M488 191.1H336v51.86c0 37.66-27.08 72-64.55 75.77-43.09 4.333-79.45-29.42-79.45-71.63V126.4l-24.51 14.73C123.2 167.8 96.04 215.7 96.04 267.5l-80 46.3C.79 322.551-4.59 342.18 4.29 357.43l80 138.6c8.875 15.25 28.5 20.5 43.75 11.75l103.4-59.75h136.6c35.25 0 64-28.75 64-64 26.51 0 48-21.49 48-48V288h8c13.25 0 24-10.75 24-24v-48c-.04-13.3-10.74-24.9-24.04-24.9zm147.7-36.6L555.75 15.9C546.875.65 527.25-4.6 512 4.15L408.6 63.9h-62.57c-37.85 0-74.93 10.61-107.1 30.63C229.7 100.4 224 110.6 224 121.6V248c0 22.13 17.88 40 40 40 22.13 0 40-17.88 40-40v-88.9h184c30.93 0 56 25.07 56 56v28.5l80-46.25c15.3-7.95 20.5-27.55 11.7-42.85z" />
  </svg>
);

const SvgHandshakeAngleSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgHandshakeAngleSolid;
