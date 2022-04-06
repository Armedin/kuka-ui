import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" {...props}>
    <path d="m.253 166.9-.21-98.91C.02 57.74 9.508 50.11 19.51 52.34l35.56 7.9a31.987 31.987 0 0 1 23.02 20L95.1 127.1l128.2 38.5-41.5-145.2C178.9 10.18 186.6.001 197.2.001h40.1c11.5 0 22.2 6.235 27.9 16.309l109 193.89 107.3 31.6c15.9 4.7 30.7 12.5 43.7 22.9l34.4 27.5c24.1 19.2 18.1 57.3-10.7 68.3-41.2 15.6-86.2 18-128.8 6.9l-298.4-77.6c-11.1-2.9-21.2-8.7-29.3-16.9L9.536 189.4c-5.93-6-9.265-14.1-9.283-22.5zM608 448c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.67 0-32-14.3-32-32s14.33-32 32-32h576zm-416-80c0 17.7-14.3 32-32 32s-32-14.3-32-32 14.3-32 32-32 32 14.3 32 32zm32 16c0-17.7 14.3-32 32-32s32 14.3 32 32-14.3 32-32 32-32-14.3-32-32z" />
  </svg>
);

const SvgPlaneArrivalSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgPlaneArrivalSolid;
