import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" {...props}>
    <path d="M368 224v-80c0-8.8-7.2-16-16-16s-16 7.156-16 16v80h-22.94l-29.22-48.7C272.3 156 251.1 144 228.6 144c-28.62 0-54.13 19.23-61.97 46.75l-10.69 37.39c-8.64 29.96 1.16 62.46 24.86 82.66l69.66 59.73C253.1 373.6 256 378 256 382.7V496c0 8.844 7.156 16 16 16s16-7.156 16-16V382.7c0-14.03-6.125-27.31-16.78-36.44l-69.66-59.72C187.4 274.4 181.5 254.9 186.7 236.9l10.69-37.39C201.3 185.7 214.2 176 228.6 176c11.34 0 22 6.031 27.84 15.77l33.88 56.47C293.2 253 298.4 256 304 256h32v240c0 8.844 7.156 16 15.1 16s16.9-7.2 16.9-16V256c8.8 0 16-7.2 16-16s-7.2-16-16-16zM163.9 352.5c-8.75-2.234-17.28 3.062-19.41 11.64l-32 128c-2.125 8.562 3.062 17.25 11.66 19.39 1.25.27 2.55.47 3.85.47 7.188 0 13.72-4.844 15.53-12.12l32-128c2.17-8.58-3.03-17.28-11.63-19.38zM264 112c30.9 0 56-25.12 56-56S294.9 0 264 0s-56 25.12-56 56 25.1 56 56 56zm0-80c13.2 0 24 10.77 24 24s-10.8 24-24 24-24-10.77-24-24 10.8-24 24-24zM160.4 91.47c-2.1-3.72-5.5-6.47-9.6-7.64-49.1-14.3-103.55 18.57-118.96 71.67L.625 263.1c-1.219 4.3-.625 8 1.656 12.7a16.05 16.05 0 0 0 10.47 7.406l76.84 16.02c1.094.234 2.188.344 3.25.344 7 0 13.34-4.594 15.38-11.55l53.5-184.4c1.179-4.04.679-8.43-1.321-12.15zM81.59 264.9l-45.4-9.5 26.41-90.97C67.53 147.4 79 132.2 94.09 122.5c10.09-6.438 21-9.844 31.75-10.08L81.59 264.9z" />
  </svg>
);

const SvgPersonHiking = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgPersonHiking;