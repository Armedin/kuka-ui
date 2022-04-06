import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
    <path d="M64 264c0-22.1 17.91-40 40-40h240c22.1 0 40 17.9 40 40v80c0 22.1-17.9 40-40 40H104c-22.09 0-40-17.9-40-40v-80zm32 0v80c0 4.4 3.58 8 8 8h240c4.4 0 8-3.6 8-8v-80c0-4.4-3.6-8-8-8H104c-4.42 0-8 3.6-8 8zm32-200h192V16c0-8.836 7.2-16 16-16s16 7.164 16 16v48h32c35.3 0 64 28.65 64 64v320c0 35.3-28.7 64-64 64H64c-35.35 0-64-28.7-64-64V128c0-35.35 28.65-64 64-64h32V16c0-8.836 7.2-16 16-16s16 7.164 16 16v48zM32 448c0 17.7 14.33 32 32 32h320c17.7 0 32-14.3 32-32V192H32v256zm0-320v32h384v-32c0-17.7-14.3-32-32-32H64c-17.67 0-32 14.3-32 32z" />
  </svg>
);

const SvgCalendarWeek = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgCalendarWeek;
