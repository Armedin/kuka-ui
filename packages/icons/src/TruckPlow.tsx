import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" {...props}>
    <path d="M424 192c30.9 0 56 25.1 56 56v96c0 2.7-.3 5.4-.8 8H512V208c0-3.7 1.3-7.4 3.7-10.2l80-96c5.7-6.83 15.8-7.75 22.5-2.09 6.8 5.69 7.7 15.79 2.1 22.49L544 213.8v148.4l76.3 91.6c5.6 6.7 4.7 16.8-2.1 22.5-6.7 5.6-16.8 4.7-22.5-2.1L520.5 384H464c0 53-43 96-96 96-53.9 0-96-43-96-96h-48c0 53-43 96-96 96-53.02 0-96-43-96-96v-.8C13.74 379.5 0 363.4 0 344v-96c0-30.9 25.07-56 56-56h72V80c0-26.51 21.5-48 48-48h94.1c16.7 0 32.2 8.7 40.9 22.97L394.8 192H424zM176 64c-8.8 0-16 7.16-16 16v112h197.2L283.7 71.66c-2.9-4.76-8.1-7.66-13.6-7.66H176zm272 266.9V248c0-13.3-10.7-24-24-24H56c-13.25 0-24 10.7-24 24v96c0 3.6 2.35 6.6 5.59 7.6C50.88 314.5 86.34 288 128 288c41.8 0 77.4 26.7 90.5 64h59c13.1-37.3 48.7-64 90.5-64 33.4 0 62.8 17 80 42.9zM128 320c-35.35 0-64 28.7-64 64s28.65 64 64 64c35.3 0 64-28.7 64-64s-28.7-64-64-64zm240 128c35.3 0 64-28.7 64-64s-28.7-64-64-64-64 28.7-64 64 28.7 64 64 64z" />
  </svg>
);

const SvgTruckPlow = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgTruckPlow;