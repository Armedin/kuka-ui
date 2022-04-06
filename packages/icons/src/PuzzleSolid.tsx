import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M256 160c0-17.67-14.33-32-32-32h-16V96c0-17.67-14.33-32-32-32H64C28.65 64 0 92.65 0 128v144h80v-32c0-17.67 14.33-32 32-32s32 14.33 32 32v32h64v-80h16c17.7 0 32-14.3 32-32zM0 448c0 35.35 28.65 64 64 64h144v-80h-32c-17.67 0-32-14.33-32-32s14.33-32 32-32h32v-64H0v144zm416-144h-48v32c0 17.67-14.33 32-32 32s-32-14.33-32-32v-32h-64v208h144c35.35 0 64-28.65 64-64V336c0-17.7-14.3-32-32-32zM448 0H336c-17.67 0-32 14.33-32 32v48h32c17.67 0 32 14.33 32 32s-14.33 32-32 32h-32v64h64v16c0 17.67 14.33 32 32 32s32-14.33 32-32v-16h48c17.67 0 32-14.33 32-32V64c0-35.35-28.7-64-64-64z" />
  </svg>
);

const SvgPuzzleSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgPuzzleSolid;
