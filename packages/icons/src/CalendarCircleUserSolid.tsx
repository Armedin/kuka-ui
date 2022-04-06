import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" {...props}>
    <path d="M96 32c0-17.67 14.3-32 32-32s32 14.33 32 32v32h128V32c0-17.67 14.3-32 32-32s32 14.33 32 32v32h48c26.5 0 48 21.49 48 48v48H0v-48c0-26.51 21.49-48 48-48h48V32zm320 160.7c-89.7 8.1-160 83.5-160 175.3 0 59.5 29.6 112.1 74.8 144H48c-26.51 0-48-21.5-48-48V192h416v.7zM288 368c0-79.5 64.5-144 144-144s144 64.5 144 144-64.5 144-144 144-144-64.5-144-144zm144 112c30.2 0 57.5-11.9 77.7-31.3-6.2-19-24.1-32.7-45.1-32.7h-65.2c-21 0-38.9 13.7-45.1 32.7 20.2 19.4 47.5 31.3 77.7 31.3zm0-96c26.5 0 48-21.5 48-48s-21.5-48-48-48-48 21.5-48 48 21.5 48 48 48z" />
  </svg>
);

const SvgCalendarCircleUserSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgCalendarCircleUserSolid;
