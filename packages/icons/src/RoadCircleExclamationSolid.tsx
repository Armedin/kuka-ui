import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" {...props}>
    <path d="M213.2 32H288v64c0 17.7 14.3 32 32 32s32-14.3 32-32V32h74.8c27.1 0 51.2 17.08 60.3 42.63l42.7 120.57c-10.9-2.1-22.2-3.2-33.8-3.2-59.5 0-112.1 29.6-144 74.8V224c0-17.7-14.3-32-32-32s-32 14.3-32 32v64c0 17.7 14.3 32 32 32 2.3 0 4.6-.3 6.8-.7-4.4 15.4-6.8 31.8-6.8 48.7 0 5.4.2 10.7.7 16h-.7c-17.7 0-32 14.3-32 32v64H86.61C56.45 480 32 455.5 32 425.4c0-6.2 1.06-12.4 3.13-18.2L152.9 74.63C161.1 49.08 186.1 32 213.2 32zM352 368c0-79.5 64.5-144 144-144s144 64.5 144 144-64.5 144-144 144-144-64.5-144-144zm144 96c13.3 0 24-10.7 24-24s-10.7-24-24-24-24 10.7-24 24 10.7 24 24 24zm-16.9-176v80c0 8.8 8.1 16 16 16 9.7 0 16-7.2 16-16v-80c0-8.8-6.3-16-16-16-7.9 0-16 7.2-16 16z" />
  </svg>
);

const SvgRoadCircleExclamationSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgRoadCircleExclamationSolid;
