import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" {...props}>
    <path d="M112 0c8.8 0 16 7.164 16 16v48h192V16c0-8.836 7.2-16 16-16s16 7.164 16 16v48h32c35.3 0 64 28.65 64 64v64H32v256c0 17.7 14.33 32 32 32h232.2c10.1 12.1 21.7 22.9 34.6 32H64c-35.35 0-64-28.7-64-64V128c0-35.35 28.65-64 64-64h32V16c0-8.836 7.2-16 16-16zm272 96H64c-17.67 0-32 14.3-32 32v32h384v-32c0-17.7-14.3-32-32-32zm104 248c0 30.9-25.1 56-56 56s-56-25.1-56-56 25.1-56 56-56 56 25.1 56 56zm-56-24c-13.3 0-24 10.7-24 24s10.7 24 24 24 24-10.7 24-24-10.7-24-24-24zm-144 48c0-79.5 64.5-144 144-144s144 64.5 144 144-64.5 144-144 144-144-64.5-144-144zm144 112c22.1 0 42.7-6.4 59.1-17.4-7-9.1-18.5-14.6-30.9-14.6h-56.4c-12.4 0-23.9 5.5-31.8 14.6 17.3 11 37.9 17.4 60 17.4zm28.2-64c21.9 0 42.2 9.6 56.1 25.8 17.2-19.7 27.7-45.6 27.7-73.8 0-61.9-50.1-112-112-112s-112 50.1-112 112c0 28.2 10.5 54.1 27.7 73.8 13.9-16.2 34.2-25.8 56.1-25.8h56.4z" />
  </svg>
);

const SvgCalendarCircleUser = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgCalendarCircleUser;
