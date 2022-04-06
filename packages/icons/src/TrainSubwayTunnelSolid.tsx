import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M512 256v192c0 35.3-28.7 64-64 64h-41.4l-64.3-64.3c32.4-3.2 57.7-30.5 57.7-63.7V192c0-35.3-28.7-64-64-64H176c-35.3 0-64 28.7-64 64v192c0 33.2 25.3 60.5 57.7 63.7L105.4 512H64c-35.35 0-64-28.7-64-64V256C0 114.6 114.6 0 256 0s256 114.6 256 256zM150.6 512l64-64h82.8l64 64H150.6zM216 192c13.3 0 24 10.7 24 24v80c0 13.3-10.7 24-24 24h-32c-13.3 0-24-10.7-24-24v-80c0-13.3 10.7-24 24-24h32zm56 24c0-13.3 10.7-24 24-24h32c13.3 0 24 10.7 24 24v80c0 13.3-10.7 24-24 24h-32c-13.3 0-24-10.7-24-24v-80zM160 376c0-13.3 10.7-24 24-24s24 10.7 24 24-10.7 24-24 24-24-10.7-24-24zm192 0c0 13.3-10.7 24-24 24s-24-10.7-24-24 10.7-24 24-24 24 10.7 24 24z" />
  </svg>
);

const SvgTrainSubwayTunnelSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgTrainSubwayTunnelSolid;
