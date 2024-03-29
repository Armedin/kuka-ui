import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256 256-114.6 256-256S397.4 0 256 0zm112 360c0 13.25-10.75 24-24 24s-24-10.7-24-24v-80H192v80c0 13.3-10.7 24-24 24s-24-10.7-24-24V152c0-13.2 10.8-24 24-24s24 10.8 24 24v80h128v-80c0-13.2 10.8-24 24-24s24 10.75 24 24v208z" />
  </svg>
);

const SvgCircleHSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgCircleHSolid;
