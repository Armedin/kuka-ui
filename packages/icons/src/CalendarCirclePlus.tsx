import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" {...props}>
    <path d="M112 0c8.8 0 16 7.164 16 16v48h192V16c0-8.836 7.2-16 16-16s16 7.164 16 16v48h32c35.3 0 64 28.65 64 64v64H32v256c0 17.7 14.33 32 32 32h232.2c10.1 12.1 21.7 22.9 34.6 32H64c-35.35 0-64-28.7-64-64V128c0-35.35 28.65-64 64-64h32V16c0-8.836 7.2-16 16-16zm272 96H64c-17.67 0-32 14.3-32 32v32h384v-32c0-17.7-14.3-32-32-32zm48 191.1c8.8 0 16 8.1 16 16v48h48c8.8 0 16 8.1 16 16 0 9.7-7.2 16-16 16h-48v48c0 9.7-7.2 16-16 16s-16-6.3-16-16v-48h-48c-8.8 0-16-6.3-16-16 0-7.9 7.2-16 16-16h48v-48c0-7.9 7.2-16 16-16zM288 368c0-79.5 64.5-144 144-144s144 64.5 144 144-64.5 144-144 144-144-64.5-144-144zm144 112c61.9 0 112-50.1 112-112s-50.1-112-112-112-112 50.1-112 112 50.1 112 112 112z" />
  </svg>
);

const SvgCalendarCirclePlus = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgCalendarCirclePlus;
