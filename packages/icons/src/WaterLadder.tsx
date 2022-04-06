import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" {...props}>
    <path d="M562 447.1c-28.14-3.625-53.29-18.34-69.03-40.38-6-8.438-20.04-8.438-26.04 0C448.5 432.6 417.5 448 383.1 448c-33.52 0-64.53-15.44-82.97-41.28-6.031-8.438-20.03-8.438-26.06 0C256.5 432.6 225.5 448 192 448c-33.51 0-64.53-15.44-82.97-41.28C106 402.5 101.2 400 96 400s-10.02 2.5-13.02 6.719c-15.73 22.03-40.89 36.75-69.03 40.38C5.184 448.224-1 456.255.12 465.039c1.125 8.75 9.029 15.06 17.92 13.81 29.98-3.875 57.48-17.47 77.94-38.09 24.62 24.84 59.28 39.25 96.05 39.25 36.77 0 71.33-14.41 95.96-39.25 24.62 24.84 59.29 39.22 96.05 39.22 36.78 0 71.33-14.38 95.96-39.22 20.45 20.62 47.95 34.22 77.94 38.09 8.951 1.375 16.79-5.062 17.92-13.81.24-8.739-5.06-16.839-13.86-17.939zM144 384c8.8 0 16-7.2 16-16V256h224v112c0 8.844 7.156 16 16 16s16-7.156 16-16V112c0-26.47 21.5-48 48-48s48 21.53 48 48v16c0 8.844 7.156 16 16 16s16-7.2 16-16v-16c0-44.11-35.9-80-80-80s-80 35.89-80 80v112H160V112c0-26.47 21.5-48 48-48s48 21.53 48 48v16c0 8.844 7.156 16 16 16s16-7.2 16-16v-16c0-44.11-35.9-80-80-80s-80 35.89-80 80v256c0 8.8 7.2 16 16 16z" />
  </svg>
);

const SvgWaterLadder = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgWaterLadder;