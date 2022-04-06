import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" {...props}>
    <path d="M232 224c-13.25 0-24 14.33-24 31.1s10.7 32.9 24 32.9 24-14.3 24-32-10.7-32-24-32zM260.4 1.443l-160 40C78.1 46.79 64 65.1 64 88.03V480H16c-8.836 0-16 7.2-16 16s7.164 16 16 16h272c17.67 0 32-14.33 32-32V49.15c0-10.14-2.611-20.34-8.523-28.59C299.4 3.707 279.3-3.279 260.4 1.443zM288 480H96V88.04c0-7.373 5-13.75 12.12-15.53l160-40c4.78-1.29 9.78-.13 13.68 2.9 4 3.06 6.2 7.66 6.2 12.63V480zm272 0h-48V144c0-44.18-35.82-79.1-79.1-79.1H368c-8.836 0-16 7.162-16 15.1s7.164 16 16 16h64c26.51 0 48 21.49 48 48v336c0 17.67 14.33 32 32 32h48c8.836 0 16-7.164 16-15.1 0-9.7-7.2-16.9-16-16.9z" />
  </svg>
);

const SvgDoorOpen = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgDoorOpen;
