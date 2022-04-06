import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
    <path d="M272 204c0-15.44-12.56-28-28-28h-68v56h68c15.4 0 28-12.6 28-28zM384 32H64C28.65 32 0 60.65 0 96v320c0 35.35 28.65 64 64 64h320c35.35 0 64-28.65 64-64V96c0-35.35-28.7-64-64-64zM260 384H152c-13.2 0-24-10.7-24-24V152c0-13.2 10.8-24 24-24h92c41.9 0 76 34.1 76 76 0 16.35-5.301 31.41-14.12 43.82C324.1 261.7 336 283.4 336 308c0 41.9-34.1 76-76 76zm0-104h-84v56h84c15.4 0 28-12.6 28-28s-12.6-28-28-28z" />
  </svg>
);

const SvgSquareBSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgSquareBSolid;
