import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
    <path d="m438.4 281.9-184 216c-7.6 9-18.7 14.1-30.4 14.1s-22.8-5.1-30.4-14.1L9.55 281.9c-12.733-15.8-12.733-36.9 0-51.8L193.6 14.06C201.2 5.14 212.3 0 224 0s22.9 5.14 30.4 14.06l184 216.04c12.8 14.9 12.8 36 0 51.8zM230.1 34.81c-1.5-1.78-3.8-2.81-6.1-2.81s-4.6 1.03-6.1 2.81L33.91 250.8c-2.55 3-2.55 7.4 0 10.4l183.99 216c1.5.9 3.8 2.8 6.1 2.8s4.6-1.9 6.1-2.8l184-216c2.5-3 2.5-7.4 0-10.4l-184-215.99z" />
  </svg>
);

const SvgRhombus = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgRhombus;
