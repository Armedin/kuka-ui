import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" {...props}>
    <path d="M304 288h-88.63C252.3 252 288 191.6 288 137.1 288 53 230.8 0 160 0S32 53 32 137.1C32 191.6 67.75 252 104.6 288H16c-8.801 0-16 7.2-16 16s7.199 16 16 16h128v176c0 8.801 7.199 16 16 16s16-7.199 16-16V320h128c8.801 0 16-7.199 16-16s-7.2-16-16-16zm-143.7 0C139.4 286.1 64 208.9 64 137.1 64 75.25 103.5 32 160 32s96 43.25 96 105.1c0 71.8-75.2 149-95.7 150.9z" />
  </svg>
);

const SvgAnkh = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgAnkh;
