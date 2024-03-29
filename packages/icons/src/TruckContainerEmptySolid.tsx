import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" {...props}>
    <path d="M528.8 144c16.8 0 32.7 7.5 43.4 20.5l57.9 71.9c6.7 7.1 9.9 16.1 9.9 25.3V352c0 17.7-14.3 32-32 32h-1.6c1 5.2 1.6 10.5 1.6 16 0 44.2-35.8 80-80 80s-80-35.8-80-80c0-5.5.6-10.8 1.6-16H286.4c1 5.2 1.6 10.5 1.6 16 0 44.2-35.8 80-80 80-26.2 0-49.4-12.6-64-32-14.6 19.4-37.8 32-64 32-44.18 0-80-35.8-80-80v-48c0-17.7 14.33-32 32-32h400V168c0-13.3 10.7-24 24-24h72.8zm6.2 50.9a8.14 8.14 0 0 0-6.2-2.9H480v64h104.1L535 194.9zM528 432c17.7 0 32-14.3 32-32s-14.3-32-32-32-32 14.3-32 32 14.3 32 32 32zm-320-64c-17.7 0-32 14.3-32 32s14.3 32 32 32 32-14.3 32-32-14.3-32-32-32zM80 432c17.67 0 32-14.3 32-32s-14.33-32-32-32-32 14.3-32 32 14.33 32 32 32z" />
  </svg>
);

const SvgTruckContainerEmptySolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgTruckContainerEmptySolid;
