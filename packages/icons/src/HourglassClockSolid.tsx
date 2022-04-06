import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" {...props}>
    <path d="M352 0c17.7 0 32 14.33 32 32s-14.3 32-32 32v10.98c0 42.42-16.9 83.12-46.9 113.12L237.3 256l35.9 35.1c-11 23-17.2 49.7-17.2 76.9 0 59.5 29.6 112.1 74.8 144H32c-17.67 0-32-14.3-32-32s14.33-32 32-32v-11c0-42.4 16.86-83.1 46.86-113.1L146.7 256l-67.84-67.9C48.86 158.1 32 117.4 32 74.98V64C14.33 64 0 49.67 0 32S14.33 0 32 0h320zM111.1 128H272c10.4-15.6 16-34.02 16-53.02V64H96v10.98c0 19 5.6 37.42 15.1 53.02zM576 368c0 79.5-64.5 144-144 144s-144-64.5-144-144 64.5-144 144-144 144 64.5 144 144zm-160.9-64v64c0 8.8 8.1 16 16 16H480c8.8 0 16-7.2 16-16s-7.2-16-16-16h-32.9v-48c0-8.8-6.3-16-16-16-7.9 0-16 7.2-16 16z" />
  </svg>
);

const SvgHourglassClockSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgHourglassClockSolid;
