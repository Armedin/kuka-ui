import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M512 437.1c0-13.89-11.25-23.97-23.91-23.97-18.93 0-19.21 19.1-46.18 19.1-5.48 0-10.88-1.081-15.88-3.389l-49.12-25.42c4.251-5.375 7.232-11.85 7.232-19.35v-96.02c0-17.75-14.37-32-32-32h-50.86l46.12-46.12c9.24-9.156 14.07-21.4 14.07-33.81 0-26.1-21.05-48.08-47.95-48.08H160c-17.75 0-32 14.25-32 32s14.25 32 32 32h82.78L169.4 265.4c-1.2 1.1-9 8.7-9 21.4 0 1.616.107 3.249.294 4.898L34.98 226.7c-3.512-1.793-7.311-2.678-11.02-2.678-14.1 0-23.97 11.47-23.97 23.99 0 8.709 4.747 17.09 12.98 21.3l391.9 202.6c11.88 5.5 24.47 8.117 37.1 8.117C480.9 480 512 454.9 512 437.1zM320 374l-104.4-54 104.5.02V374zm80-246c26.51 0 48.01-21.5 48.01-48S426.5 32 400 32c-26.51 0-48.01 21.5-48.01 48s21.51 48 48.01 48z" />
  </svg>
);

const SvgPersonSleddingSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgPersonSleddingSolid;
