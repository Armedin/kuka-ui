import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" {...props}>
    <path d="M96 24c0-13.25 10.7-24 24-24h80c13.3 0 24 10.75 24 24v24h8c13.3 0 24 10.75 24 24s-10.7 24-24 24H88c-13.25 0-24-10.75-24-24s10.75-24 24-24h8V24zM0 256c0-70.7 57.31-128 128-128h128c70.7 0 128 57.3 128 128v192c0 35.3-28.7 64-64 64H64c-35.35 0-64-28.7-64-64V256zm256 96c0 17.7 14.3 32 32 32s32-14.3 32-32v-96c0-17.7-14.3-32-32-32s-32 14.3-32 32v96z" />
  </svg>
);

const SvgJugDetergentSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgJugDetergentSolid;
