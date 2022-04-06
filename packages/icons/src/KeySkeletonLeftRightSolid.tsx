import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" {...props}>
    <path d="M639.1 128c0 70.7-56.4 128-128 128-58.7 0-108.9-40.8-123.1-96.9h-68.9V192c0 17.7-13.4 32-32 32-16.8 0-32-14.3-32-32v-32.9h-32V192c0 17.7-13.4 32-32 32-16.8-.9-32-14.3-32-32.9v-64c0-16.8 15.2-32 32-32H388C402.2 40.79 452.4 0 511.1 0c71.6 0 128 57.31 128 128zm-128-64c-34.5 0-64 28.65-64 64 0 35.3 29.5 64 64 64 36.2 0 64-28.7 64-64 0-35.35-27.8-64-64-64zM0 384c0-70.7 57.31-128 128-128 59.6 0 109.8 40.8 123.1 96H320v-32c0-17.7 14.3-32 32-32s32 14.3 32 32v32h32v-32.9c0-16.8 14.3-32 32-31.1 17.7 0 32 14.3 32 32v64c0 17.7-14.3 32-32 32H251.1c-13.3 55.2-63.5 96-123.1 96C57.31 512 0 454.7 0 384zm128 64c35.3 0 64-28.7 64-64s-28.7-64-64-64c-35.35 0-64 28.7-64 64s28.65 64 64 64z" />
  </svg>
);

const SvgKeySkeletonLeftRightSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgKeySkeletonLeftRightSolid;
