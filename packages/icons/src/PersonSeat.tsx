import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" {...props}>
    <path d="M368 448h-49.88l-14.27-114.1c-.95-8-7.75-13.9-15.85-13.9H144c-8.8 0-16-7.2-16-16v-80h128c8.838 0 16-7.164 16-16 0-8.8-7.2-16-16-16H128v-32c0-8.844-7.156-16-16-16s-16 7.2-16 16v144c0 26.5 21.5 48 48 48h129.1l14.13 114c1.87 8 8.67 14 16.77 14h64c8.844 0 16-7.156 16-16s-7.2-16-16-16zm-160-32h-76.8C76.5 416 32 371.5 32 316.8V144c0-8.8-7.16-16-16-16s-16 7.2-16 16v172.8C0 389.2 58.86 448 131.2 448H208c8.844 0 16-7.156 16-16s-7.2-16-16-16zm-72-304c30.9 0 56-25.07 56-56S166.9 0 136 0 80 25.07 80 56s25.1 56 56 56zm0-80c13.2 0 24 10.77 24 24s-10.8 24-24 24-24-10.77-24-24 10.8-24 24-24z" />
  </svg>
);

const SvgPersonSeat = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgPersonSeat;
