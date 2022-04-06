import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256 256-114.6 256-256S397.4 0 256 0zm72 336c13.25 0 24 10.75 24 24s-10.7 24-24 24H184c-13.2 0-24-10.7-24-24s10.75-24 24-24h48V176h-48c-13.2 0-24-10.7-24-24s10.8-24 24-24h144c13.3 0 24 10.8 24 24s-10.7 24-24 24h-48v160h48z" />
  </svg>
);

const SvgCircleISolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgCircleISolid;
