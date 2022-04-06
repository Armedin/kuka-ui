import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" {...props}>
    <path d="m115.4 136.8 102.1 37.35c35.13-81.62 86.25-144.4 139-173.7-95.88-4.875-188.8 36.96-248.5 111.7-6.8 8.45-2.8 21.05 7.4 24.65zM247.6 185l238.5 86.87c35.75-121.4 18.62-231.6-42.63-253.9-7.375-2.625-15.12-4.062-23.12-4.062C362.4 13.88 292.1 83.13 247.6 185zM521.5 60.51c6.25 16.25 10.75 34.62 13.13 55.25 5.75 49.87-1.376 108.1-18.88 166.9l102.6 37.37c10.13 3.75 21.25-3.375 21.5-14.12C642.3 210.1 598 118.4 521.5 60.51zM528 448H321l65-178.5-60.13-21.87-72.88 200.4H48C21.49 448 0 469.5 0 496c0 8.8 7.163 16 16 16h544c8.837 0 16-7.163 16-15.1 0-27.4-21.5-48.9-48-48.9z" />
  </svg>
);

const SvgUmbrellaBeachSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgUmbrellaBeachSolid;
