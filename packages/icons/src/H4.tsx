import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" {...props}>
    <path d="M624 64.22c-8.844 0-16 7.152-16 15.99v187.7H413.9l33.86-184.8c1.594-8.683-4.156-17.02-12.86-18.61-8.641-1.374-17.03 4.185-18.61 12.87l-37.33 203.7a16.018 16.018 0 0 0 3.438 13.12 15.992 15.992 0 0 0 12.3 5.747H608v132.1C608 440.8 615.2 448 624 448s16-7.152 16-15.99V80.21c0-8.84-7.2-15.99-16-15.99zM304 64c-8.8 0-16 7.15-16 15.99v159.9H32V79.99C32 71.15 24.84 64 16 64S0 71.15 0 79.99V431.8c0 8.839 7.156 15.99 16 15.99s16-7.19 16-15.99V271.9h256v159.9c0 8.839 7.156 15.99 16 15.99s16-7.152 16-15.99V79.99c0-8.84-7.2-15.99-16-15.99z" />
  </svg>
);

const SvgH4 = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgH4;
