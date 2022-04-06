import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" {...props}>
    <path d="M256 400h-64v-48.81c89.55-8.123 160-83.56 160-175.2 0-97.03-78.97-176-176-176S0 78.96 0 175.99c0 91.63 70.45 167.1 160 175.2V400H96c-8.844 0-16 7.156-16 16s7.156 16 16 16h64v64c0 8.8 7.2 16 16 16s16-7.2 16-16v-64h64c8.844 0 16-7.156 16-16s-7.2-16-16-16zm-80-80c-79.41 0-144-64.6-144-144S96.59 32 176 32s144 64.59 144 144-64.6 144-144 144zM638.8 9.891a16 16 0 0 0-8.66-8.66A16.004 16.004 0 0 0 624 0H496c-8.8 0-16 7.156-16 16s7.2 16 16 16h89.38l-72.84 72.84c-30.53-25.47-69.84-40.81-112.6-40.81-5.906 0-11.71.282-17.46.813-8.781.844-15.25 8.656-14.41 17.47.875 8.812 8.844 15.06 17.47 14.41C390.3 96.25 395.1 96 400 96c79.4 0 144 64.6 144 144s-64.6 144-144 144c-31.47 0-61.34-9.969-86.38-28.78-6.969-5.344-17.12-3.938-22.41 3.156-5.312 7.062-3.906 17.09 3.156 22.41C325 403.8 361.5 416 400 416c97 0 176-79 176-176 0-42.77-15.37-82-40.84-112.5L608 54.63V144c0 8.8 7.2 16 16 16s16-7.2 16-16V16c0-2.08-.4-4.15-1.2-6.109z" />
  </svg>
);

const SvgVenusMars = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgVenusMars;
