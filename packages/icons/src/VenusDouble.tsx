import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" {...props}>
    <path d="M368 176C368 78.97 289.05 0 192 0S16 78.97 16 176c0 91.63 70.43 167.1 160 175.2V400h-64c-8.8 0-16 7.2-16 16s7.156 16 16 16h64v64c0 8.8 7.2 16 16 16s16-7.156 16-16v-64h64c8.8 0 16-7.2 16-16s-7.156-16-16-16h-64v-48.81C297.6 343.1 368 267.6 368 176zM192 320c-79.41 0-144-64.59-144-144S112.6 32 192 32s144 64.59 144 144-64.6 144-144 144zm432-144C624 78.97 545 0 448 0c-24.47 0-48.16 4.938-70.41 14.66-8.094 3.531-11.8 12.97-8.25 21.06 3.531 8.062 13 11.81 21.06 8.25C408.6 36.03 427.1 32 448 32c79.41 0 144 64.59 144 144s-64.6 144-144 144c-20.03 0-39.41-4.031-57.59-11.97-8.062-3.5-17.53.219-21.06 8.25-3.547 8.094.156 17.53 8.25 21.06 17.36 7.582 35.61 12.16 54.41 13.84V400h-64c-8.844 0-16 7.156-16 16s7.156 16 16 16h64v64c0 8.844 7.156 16 16 16s16-7.156 16-16v-64h64c8.844 0 16-7.156 16-16s-7.156-16-16-16h-64v-48.81C553.6 343.1 624 267.6 624 176z" />
  </svg>
);

const SvgVenusDouble = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgVenusDouble;
