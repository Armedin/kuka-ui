import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
    <path d="M160 32v32h128V32c0-17.67 14.3-32 32-32s32 14.33 32 32v32h48c26.5 0 48 21.49 48 48v48H0v-48c0-26.51 21.49-48 48-48h48V32c0-17.67 14.3-32 32-32s32 14.33 32 32zM0 192h448v272c0 26.5-21.5 48-48 48H48c-26.51 0-48-21.5-48-48V192zm308.8 75c-14.7-14.7-38.6-14.7-53.3 0l-14.9 14.1 53.3 54.2 14.9-14.9c14.7-14.8 14.7-38.6 0-53.4zM137.6 391.4l-9.1 36.6c-1.4 5.5.2 11.3 4.2 15.2 4 4 9.7 5.6 15.2 4.2l36.6-9.1c5.6-1.4 10.8-5.2 14.9-8.4l71.9-72-54.2-53.3-71 71.9c-5 4.1-7.1 9.3-8.5 14.9z" />
  </svg>
);

const SvgCalendarPenSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgCalendarPenSolid;
