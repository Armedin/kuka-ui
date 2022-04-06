import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" {...props}>
    <path d="M288 96c0 17.7 14.3 32 32 32s32-14.3 32-32V32h74.8c27.1 0 51.2 17.08 60.3 42.63l30.4 85.87C460.6 165.8 416 213.7 416 272v24.6c-19.1 11-32 31.7-32 55.4v128h-32v-64c0-17.7-14.3-32-32-32s-32 14.3-32 32v64H86.61C56.45 480 32 455.5 32 425.4c0-6.2 1.06-12.4 3.13-18.2L152.9 74.63C161.1 49.08 186.1 32 213.2 32h73.9l.9 64zm64 128c0-17.7-14.3-32-32-32s-32 14.3-32 32v64c0 17.7 14.3 32 32 32s32-14.3 32-32v-64zm176-32c44.2 0 80 35.8 80 80v48c17.7 0 32 14.3 32 32v128c0 17.7-14.3 32-32 32H448c-17.7 0-32-14.3-32-32V352c0-17.7 14.3-32 32-32v-48c0-44.2 35.8-80 80-80zm0 48c-17.7 0-32 14.3-32 32v48h64v-48c0-17.7-14.3-32-32-32z" />
  </svg>
);

const SvgRoadLockSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgRoadLockSolid;
