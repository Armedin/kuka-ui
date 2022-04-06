import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
    <path d="M160 32v32h128V32c0-17.67 14.3-32 32-32s32 14.33 32 32v32h48c26.5 0 48 21.49 48 48v48H0v-48c0-26.51 21.49-48 48-48h48V32c0-17.67 14.3-32 32-32s32 14.33 32 32zM0 192h448v272c0 26.5-21.5 48-48 48H48c-26.51 0-48-21.5-48-48V192zm233.3 58.9c-3.8-7.7-14.8-7.7-18.6 0l-23.6 47.8-52.8 7.7c-8.5 1.2-11.9 11.7-5.7 17.7l38.1 37.2-9 52.5c-1.4 8.5 7.5 15 15.1 11l46.3-24.8 48.1 24.8c7.6 4 16.5-2.5 15.1-11l-9-52.5 38.1-37.2c6.2-6 2.8-16.5-5.7-17.7l-52.8-7.7-23.6-47.8z" />
  </svg>
);

const SvgCalendarStarSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgCalendarStarSolid;
