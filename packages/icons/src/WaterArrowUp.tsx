import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" {...props}>
    <path d="M562 479.1c-28.14-3.625-53.29-18.34-69.03-40.38-6-8.438-20.04-8.438-26.04 0C448.5 464.6 417.5 480 383.1 480c-33.52 0-64.53-15.44-82.97-41.28-6.031-8.438-20.03-8.438-26.06 0C256.5 464.6 225.5 480 192 480c-33.51 0-64.53-15.44-82.97-41.28C106 434.5 101.2 432 96 432s-10.02 2.5-13.02 6.719c-15.73 22.03-40.89 36.75-69.03 40.38C5.184 480.224-1 488.255.12 497.039c1.125 8.75 9.029 15.06 17.92 13.81 29.98-3.875 57.48-17.47 77.94-38.09 24.62 24.84 59.27 39.25 96.05 39.25 36.77 0 71.34-14.41 95.96-39.25C312.6 497.6 347.3 512 384 512c36.78 0 71.34-14.41 95.96-39.25 20.45 20.62 47.95 34.22 77.94 38.09 8.951 1.375 16.79-5.062 17.92-13.81.28-8.73-5.02-16.83-13.82-17.93zM18.05 382.8c29.98-3.875 57.48-17.47 77.94-38.09 24.62 24.84 59.27 39.16 96.05 39.16 36.77 0 71.34-14.32 95.96-39.16 24.62 24.84 59.27 39.16 96.04 39.16 36.78 0 71.35-14.32 95.97-39.16 20.45 20.62 47.95 34.22 77.94 38.09 8.951 1.375 16.79-5.062 17.92-13.81 1.125-8.781-5.062-16.81-13.83-17.94-28.14-3.625-53.29-18.34-69.03-40.38-6-8.438-20.04-8.438-26.04 0C448.5 336.6 417.5 352 383.1 352c-33.52 0-64.53-15.44-82.97-41.28-6.031-8.438-20.03-8.438-26.06 0C256.5 336.6 225.5 352 192 352c-33.51 0-64.53-15.44-82.97-41.28C106 306.5 101.2 304 96 304s-10.01 2.5-13.01 6.7c-15.73 22.03-40.89 36.75-69.03 40.38-8.766 1.125-14.95 9.156-13.83 17.94 1.128 8.78 9.032 15.08 17.92 13.78zM299.3 4.688C296.2 1.562 292.1 0 288 0s-8.2 1.562-11.3 4.688l-96 96c-6.25 6.25-6.25 16.38 0 22.62s16.38 6.25 22.62 0L272 54.63V224c0 8.844 7.156 16 16 16s16-7.156 16-16V54.63l68.69 68.69c6.25 6.25 16.38 6.25 22.62 0s6.25-16.38 0-22.62L299.3 4.688z" />
  </svg>
);

const SvgWaterArrowUp = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgWaterArrowUp;
