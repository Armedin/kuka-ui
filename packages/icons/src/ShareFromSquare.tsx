import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" {...props}>
    <path d="M400 352c-8.836 0-16 7.164-16 16v79.1c0 18.6-14.3 32.9-32 32.9H64c-17.67 0-32-14.33-32-32V160c0-17.67 14.33-32 32-32h112c8.8 0 16-7.2 16-16s-7.2-16-16-16H64c-35.35 0-64 28.7-64 64v287.1c0 35.34 28.65 64 64 64l288 .9c35.35 0 64-28.66 64-64v-80c0-8.8-7.2-16-16-16zm170.3-220.3L410.3 4.6c-6.75-5.656-16.84-4.781-22.53 2.031-5.656 6.781-4.75 16.88 2.031 22.53L515.8 128H368c-97.9 0-176 78.1-176 176v32c0 8.8 7.2 16 16 16s16-7.2 16-16v-32c0-79.4 64.6-144 144-144h147.8l-126.1 99.72c-6.781 5.656-7.688 15.75-2.031 22.53C390.9 286 395.4 288 400 288c3.625 0 7.25-1.219 10.25-3.719l160-128C573.9 153.3 576 148.7 576 143.1s-2.1-8.3-5.7-11.4z" />
  </svg>
);

const SvgShareFromSquare = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgShareFromSquare;
