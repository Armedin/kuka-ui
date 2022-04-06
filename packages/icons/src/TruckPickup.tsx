import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" {...props}>
    <path d="M526.1 192H552c30.9 0 56 25.1 56 56v104h16c8.8 0 16 7.2 16 16s-7.2 16-16 16h-64c0 53-43 96-96 96-53.9 0-96-43-96-96h-96c0 53-43 96-96 96-53.9 0-96-43-96-96H16c-8.836 0-16-7.2-16-16s7.164-16 16-16h16V248c0-30.9 25.07-56 56-56h136V80c0-26.51 21.5-48 48-48h104.5c14.7 0 28.6 6.73 37.7 18.26L526.1 192zM256 192h229.3L389 70.09c-3-3.85-7.6-6.09-12.5-6.09H272c-8.8 0-16 7.16-16 16v112zM64 352h21.46c13.18-37.3 48.74-64 90.54-64 41.8 0 77.4 26.7 90.5 64h107c13.1-37.3 48.7-64 90.5-64s77.4 26.7 90.5 64H576V248c0-13.3-10.7-24-24-24H87.1c-12.36 0-24 10.7-24 24l.9 104zm112-32c-35.3 0-64 28.7-64 64s28.7 64 64 64 64-28.7 64-64-28.7-64-64-64zm288 128c35.3 0 64-28.7 64-64s-28.7-64-64-64-64 28.7-64 64 28.7 64 64 64z" />
  </svg>
);

const SvgTruckPickup = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgTruckPickup;
