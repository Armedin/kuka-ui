import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
    <path d="M0 96c0-35.35 28.65-64 64-64h320c35.3 0 64 28.65 64 64v320c0 35.3-28.7 64-64 64H64c-35.35 0-64-28.7-64-64V96zm70.31 55.8c-8.96 9.8-8.3 24.9 1.47 33.9L148.5 256l-76.72 70.3c-9.77 9-10.43 24.1-1.47 33.9 8.95 8.9 24.14 10.4 33.89 1.5l96-88c5-4.6 7.8-11 7.8-18.6 0-5.8-2.8-12.2-7.8-16.8l-96-88c-9.75-8.9-24.94-8.3-33.89 1.5zM216 336c-13.3 0-24 10.7-24 24s10.7 24 24 24h144c13.3 0 24-10.7 24-24s-10.7-24-24-24H216z" />
  </svg>
);

const SvgSquareTerminalSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgSquareTerminalSolid;
