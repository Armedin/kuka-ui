import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" {...props}>
    <path d="M326.2 35.98c-4-1.68-8.4-1.68-12.4 0L51.58 146.4C39.72 151.4 32 162.1 32 175.9V496c0 8.8-7.16 16-16 16-8.836 0-16-7.2-16-16V175.9c0-25.8 15.43-49 39.16-59L301.4 6.484a47.87 47.87 0 0 1 37.2 0L600.8 116.9c23.8 10 39.2 33.2 39.2 59V496c0 8.8-7.2 16-16 16s-16-7.2-16-16V175.9c0-13.8-7.7-24.5-19.6-29.5L326.2 35.98zM96 224c0-17.7 14.3-32 32-32h384c17.7 0 32 14.3 32 32v272c0 8.8-7.2 16-16 16s-16-7.2-16-16V352H128v144c0 8.8-7.2 16-16 16s-16-7.2-16-16V224zm32 95.1h384V224H128v95.1zM368 416c8.8 0 16 7.2 16 16s-7.2 16-16 16h-96c-8.8 0-16-7.2-16-16s7.2-16 16-16h96z" />
  </svg>
);

const SvgGarage = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgGarage;
