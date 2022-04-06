import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
    <path d="M112 0c8.8 0 16 7.164 16 16v48h192V16c0-8.836 7.2-16 16-16s16 7.164 16 16v48h32c35.3 0 64 28.65 64 64v320c0 35.3-28.7 64-64 64H64c-35.35 0-64-28.7-64-64V128c0-35.35 28.65-64 64-64h32V16c0-8.836 7.2-16 16-16zm304 192H312v72h104v-72zm0 104H312v80h104v-80zm0 112H312v72h72c17.7 0 32-14.3 32-32v-40zm-136-32v-80H168v80h112zM168 480h112v-72H168v72zm-32-104v-80H32v80h104zM32 408v40c0 17.7 14.33 32 32 32h72v-72H32zm0-144h104v-72H32v72zm136 0h112v-72H168v72zM384 96H64c-17.67 0-32 14.3-32 32v32h384v-32c0-17.7-14.3-32-32-32z" />
  </svg>
);

const SvgCalendarDays = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgCalendarDays;
