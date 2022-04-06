import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" {...props}>
    <path d="M96 32c0-17.67 14.3-32 32-32s32 14.33 32 32v32h128V32c0-17.67 14.3-32 32-32s32 14.33 32 32v32h48c26.5 0 48 21.49 48 48v48H0v-48c0-26.51 21.49-48 48-48h48V32zm320 160.7c-89.7 8.1-160 83.5-160 175.3 0 59.5 29.6 112.1 74.8 144H48c-26.51 0-48-21.5-48-48V192h416v.7zM576 368c0 79.5-64.5 144-144 144s-144-64.5-144-144 64.5-144 144-144 144 64.5 144 144zm-144 48c-13.3 0-24 10.7-24 24s10.7 24 24 24 24-10.7 24-24-10.7-24-24-24zm15.1-128c0-8.8-6.3-16-16-16-7.9 0-16 7.2-16 16v80c0 8.8 8.1 16 16 16 9.7 0 16-7.2 16-16v-80z" />
  </svg>
);

const SvgCalendarCircleExclamationSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgCalendarCircleExclamationSolid;
