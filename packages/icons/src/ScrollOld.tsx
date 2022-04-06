import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" {...props}>
    <path d="M544 320h-63.1l-.9-176c0-61.75-50.2-112-112-112H80C35.88 32 0 67.88 0 112v80c0 17.62 14.38 32 32 32h96l.001 160c0 51.13 40.25 92.63 90.62 95.5l248 .5C527 480 576 431 576 370.6V352c0-17.6-14.4-32-32-32zM128 192H32v-80c0-26.5 21.5-48 48-48s48 21.5 48 48v80zm160 192c0 35.25-28.75 64-64 64s-64-28.75-64-64V256h48c8.8 0 16-7.2 16-16s-7.2-16-16-16h-48V112c0-18-6.9-34.62-16-48h224c38.64 0 70.95 27.52 78.38 64H400c-8.8 0-16 7.2-16 16s7.2 16 16 16h48v64h-48c-8.8 0-16 7.2-16 16s7.2 16 16 16h48v64H320c-17.62 0-31.1 14.38-31.1 32l-.9 32zm256-13.4c0 42.7-34.7 77.4-77.4 77.4H295c15.4-17 25-39.4 25-64v-32h48v16c0 8.844 7.158 16 16 16s16-7.2 16-16v-16h144v18.6z" />
  </svg>
);

const SvgScrollOld = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgScrollOld;
