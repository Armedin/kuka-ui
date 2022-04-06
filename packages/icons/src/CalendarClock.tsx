import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" {...props}>
    <path d="M112 0c8.8 0 16 7.164 16 16v48h192V16c0-8.836 7.2-16 16-16s16 7.164 16 16v48h32c35.3 0 64 28.65 64 64v64.7c-5.3-.5-10.6-.7-16-.7s-10.7.2-16 .7v-.7H32v256c0 17.7 14.33 32 32 32h232.2c10.1 12.1 21.7 22.9 34.6 32H64c-35.35 0-64-28.7-64-64V128c0-35.35 28.65-64 64-64h32V16c0-8.836 7.2-16 16-16zm272 96H64c-17.67 0-32 14.3-32 32v32h384v-32c0-17.7-14.3-32-32-32zm47.1 192c9.7 0 16 7.2 16 16v48H480c8.8 0 16 7.2 16 16s-7.2 16-16 16h-48.9c-7.9 0-16-7.2-16-16v-64c0-8.8 8.1-16 16-16zM288 368c0-79.5 64.5-144 144-144s144 64.5 144 144-64.5 144-144 144-144-64.5-144-144zm144 112c61.9 0 112-50.1 112-112s-50.1-112-112-112-112 50.1-112 112 50.1 112 112 112z" />
  </svg>
);

const SvgCalendarClock = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgCalendarClock;
