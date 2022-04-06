import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" {...props}>
    <path d="m368 223.1-34-.003c-6.875 0-13.75 4.25-15.25 11-8.5 39-62 69-126.8 69-64.62 0-118.1-30-126.8-69C63.75 228.2 56.1 223.1 49.1 223.1l-34 .003c-4.875 0-9.522 2.28-12.52 6.03C.477 233.8-.627 238.7.373 243.5L54.503 487c3.25 14.63 16.25 25 31.25 25h212.5c14.1 0 28-10.37 31.25-25l54.13-243.5c.1-4.75-.103-9.716-3.103-13.47-3.03-3.73-7.63-6.93-12.53-6.93zm-80.5 5c.5-1.75 1.5-3.25 2.125-4.875l30.12-172.5c1-5.5-1-11-5.125-14.63-4.125-3.75-9.875-5-15.25-3.375l-34.25 10.25c-4.25 1.25-7.125 4.5-9.125 8.25v207.3C273.5 250.1 285.1 238.1 287.5 228.1zm80-37 16.25-93.26c1-5.5-.1-11-5.125-14.63-4.125-3.75-9.875-5-15.25-3.375l-17.25 5.125-18.75 107.3c2.25-.375 4.25-1.125 6.625-1.125h33.5zm-144.4 77.6V31.97c0-6-3.375-11.63-8.875-14.25L183.1 1.722c-4.8-2.5-10.8-2.25-15.5.625-4.7 2.875-7.6 8.123-7.6 13.623v252.8c21.1 4.33 42.9 4.33 63.1-.07zM50 191.1c3.625 0 6.1 1 10.37 1.75L40.38 86.6l-19.75-5.87c-5.38-1.63-11.126-.38-15.251 3.25C1.254 87.73-.746 93.23.254 98.73l16.25 93.26H50zm78 67.4V33.1l-3.7-20c-.1-5.5-4.75-10-9.1-12-6.1-2.003-11.9-1.253-16.32 2.122L70.38 24.85c-4.88 3.62-7.25 9.75-6.13 15.75l36.87 197.1c5.38 7.7 14.48 14.9 26.88 20.8z" />
  </svg>
);

const SvgFrenchFriesSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgFrenchFriesSolid;
