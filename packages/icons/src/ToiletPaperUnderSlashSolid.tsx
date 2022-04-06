import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" {...props}>
    <path d="M66.53 148.8C64.93 162.7 64 177.1 64 192c0 106 42.1 192 95.1 192h206.6L66.53 148.8zM630.8 469.1l-54.8-43v-83.15c-11.06 21.68-24.61 39.28-40 51.8l-26.08-20.44C548.3 349.2 576 277.1 576 192 576 86 533 0 480 0s-95.1 86-95.1 192c0 33.81 4.408 65.53 12.08 93.13l-38.88-30.47c-4-19.86-7-40.56-7-62.66 0-83.6 23.68-153.5 60.44-192H160c-24.7 0-47.2 18.1-64.2 49.77L38.81 5.109A23.96 23.96 0 0 0 24.03 0C16.905 0 9.84 3.156 5.12 9.187c-8.188 10.44-6.375 25.53 4.062 33.7l591.1 463.1c10.5 8.203 25.56 6.328 33.69-4.078C643.1 492.4 641.2 477.3 630.8 469.1zM480 256c-17.62 0-32-28.62-32-64s14.4-64 32-64 31.1 28.62 31.1 64-13.5 64-31.1 64zM192 416v64c0 17.67 14.33 32 32 32h305.9l-122.5-96H192z" />
  </svg>
);

const SvgToiletPaperUnderSlashSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgToiletPaperUnderSlashSolid;
