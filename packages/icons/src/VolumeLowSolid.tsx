import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
    <path d="M412.6 181.9c-10.28-8.344-25.41-6.875-33.75 3.406-8.406 10.25-6.906 25.37 3.375 33.78C393.5 228.4 400 241.8 400 256c0 14.19-6.5 27.62-17.81 36.87-10.28 8.406-11.78 23.53-3.375 33.78 4.719 5.812 11.62 8.812 18.56 8.812 5.344 0 10.75-1.781 15.19-5.406C435.1 311.6 448 284.7 448 256s-12.9-55.6-35.4-74.1zM301.2 34.84c-11.5-5.187-25.01-3.116-34.43 5.259L131.8 160H48c-26.51 0-48 21.49-48 47.1v95.1c0 26.51 21.49 47.1 48 47.1h83.84l134.9 119.9c5.96 8 13.56 10.8 21.26 10.8 4.438 0 8.959-.931 13.16-2.837C312.7 472 320 460.6 320 448V64c0-12.59-7.3-24.9-18.8-29.16z" />
  </svg>
);

const SvgVolumeLowSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgVolumeLowSolid;
