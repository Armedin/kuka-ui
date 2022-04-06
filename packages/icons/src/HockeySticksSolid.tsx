import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" {...props}>
    <path d="m373.7 323.8-35.78 71.56 40.64 81.29C389.4 498.4 411.4 512 435.8 512H544V352H387.8l-14.1-28.2zm-107.4-71.6 35.8-71.6-81.5-162.91C215 6.468 203.7 0 191.1 0c-18.12 0-31.99 14.77-31.99 32.02 0 4.81 1.089 9.695 3.387 14.29L266.3 252.2zm340.8 98.9H576v159.1l32.01-.005C625.6 511.1 640 497.6 640 479.1v-95.99c0-16.71-14.4-32.01-32.9-32.01zM480 32.02C480 14.61 465.95 0 448.01 0c-11.74 0-23.03 6.468-28.64 17.69L252.2 351.1H96V512h108.2c24.41 0 46.34-13.56 57.25-35.38L476.6 46.31c2.3-4.6 3.4-9.48 3.4-14.29zM32 351.1c-17.6 0-32 14.4-32 32v95.99c0 17.6 14.4 31.1 31.99 32l32.01.01V352l-32-.9z" />
  </svg>
);

const SvgHockeySticksSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgHockeySticksSolid;
