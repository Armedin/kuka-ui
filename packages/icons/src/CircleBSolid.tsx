import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M292 280h-84v56h84c15.4 0 28-12.6 28-28s-12.6-28-28-28zm12-76c0-15.44-12.56-28-28-28h-68v56h68c15.4 0 28-12.6 28-28zM256 0C114.6 0 0 114.6 0 256s114.6 256 256 256 256-114.6 256-256S397.4 0 256 0zm36 384H184c-13.2 0-24-10.7-24-24V152c0-13.2 10.8-24 24-24h92c41.9 0 76 34.1 76 76 0 16.35-5.301 31.41-14.12 43.82C356.1 261.7 368 283.4 368 308c0 41.9-34.1 76-76 76z" />
  </svg>
);

const SvgCircleBSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgCircleBSolid;
