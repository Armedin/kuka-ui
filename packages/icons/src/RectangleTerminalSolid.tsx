import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M0 96c0-35.35 28.65-64 64-64h384c35.3 0 64 28.65 64 64v320c0 35.3-28.7 64-64 64H64c-35.35 0-64-28.7-64-64V96zm102.3 55.8c-8.95 9.8-8.29 24.9 1.5 33.9l76.7 70.3-76.7 70.3c-9.79 9-10.45 24.1-1.5 33.9 9 8.9 24.1 10.4 33.9 1.5l96-88c5-4.6 7.8-11 7.8-18.6 0-5.8-2.8-12.2-7.8-16.8l-96-88c-9.8-8.9-24.9-8.3-33.9 1.5zM248 336c-13.3 0-24 10.7-24 24s10.7 24 24 24h144c13.3 0 24-10.7 24-24s-10.7-24-24-24H248z" />
  </svg>
);

const SvgRectangleTerminalSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgRectangleTerminalSolid;
