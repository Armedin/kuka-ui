import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
    <path d="M382.7 413.9c40.33-40.53 65.31-96.35 65.31-157.9 0-123.5-100.5-224-223.1-224S1.81 132.5 1.81 256s100.5 224 223.1 224c50.47 0 96.94-16.99 134.4-45.26l61.42 71.66c2.27 3.7 6.77 5.6 10.37 5.6 4.943 0 16-3.738 16-16.01 0-3.688-1.269-7.391-3.862-10.4L382.7 413.9zM223.1 448C117.2 448 32 361.87 32 256S118.12 64 223.1 64s191.1 86.13 191.1 192c0 51.85-20.74 98.88-54.26 133.5l-109.6-127.9c-3.153-3.678-7.63-5.55-12.14-5.55-12.32 0-16.01 11.07-16.01 15.96 0 3.688 1.269 7.391 3.862 10.4l109.7 128C305.7 433.9 266.5 448 223.1 448z" />
  </svg>
);

const SvgQ = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgQ;
