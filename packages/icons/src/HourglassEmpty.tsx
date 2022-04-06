import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" {...props}>
    <path d="M368 0c8.8 0 16 7.164 16 16 0 8.84-7.2 16-16 16h-16v44.67c0 31.63-10.4 62.33-29.6 87.43L252.1 256l70.3 91.9c19.2 24.2 29.6 55.8 29.6 87.4V480h16c8.8 0 16 7.2 16 16s-7.2 16-16 16H16c-8.836 0-16-7.2-16-16s7.164-16 16-16h16v-44.7c0-31.6 10.41-63.2 29.61-87.4L131.9 256l-70.29-91.9C42.41 139 32 108.3 32 76.67V32H16C7.164 32 0 24.84 0 16 0 7.164 7.164 0 16 0h352zm-48 32H64v44.67c0 24.63 8.09 48.53 23.03 68.03l77.67 101.6c4.4 5.7 4.4 12.8 0 19.4L87.03 367.3a111.795 111.795 0 0 0-23.03 68V480h256v-44.7c0-24.6-8.1-48.5-23.9-68l-76.8-101.6c-4.4-6.6-4.4-13.7 0-19.4l76.8-101.6c15.8-19.5 23.9-43.4 23.9-68.03V32z" />
  </svg>
);

const SvgHourglassEmpty = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgHourglassEmpty;
