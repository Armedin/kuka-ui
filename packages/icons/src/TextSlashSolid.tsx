import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" {...props}>
    <path d="M352 416h-45.3l18.96-64.1-54.26-43.4L239.1 416H192c-17.67 0-32 14.31-32 32s14.33 31.99 31.1 31.99h160C369.7 480 384 465.7 384 448s-14.3-32-32-32zm278.8 53.1L354.4 252.4l45.63-156.5H512v32c0 17.69 14.33 32 32 32s32-14.31 32-32v-64c0-17.69-14.33-32-32-32H192c-17.67 0-32 14.31-32 32v36.11L38.81 5.13C28.34-3.089 13.28-1.24 5.11 9.198s-6.349 25.54 4.073 33.69l591.1 463.1a23.791 23.791 0 0 0 14.8 5.127c7.125 0 14.17-3.164 18.9-9.195 9.117-9.52 7.217-24.62-3.183-32.82zM300.1 209.9l-82.08-64.33C221.5 140.5 224 134.7 224 128V96h109.3l-33.2 113.9z" />
  </svg>
);

const SvgTextSlashSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgTextSlashSolid;
