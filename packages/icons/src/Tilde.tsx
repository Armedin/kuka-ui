import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
    <path d="M448 176v83.13C448 319 399.5 367.6 339.8 368c-37.13.125-71.38-20-92.5-50.38L172 209c-17.9-25.7-50.2-38.6-82.9-30.7-33.97 8.7-57.1 42-57.1 77.8V336c0 8.8-7.2 16-16 16s-16-7.2-16-16v-83.1C0 193 48.5 144.4 108.3 144c37.13-.125 71.38 20 92.5 50.38L276 303c17.88 25.75 50.25 38.63 81.1 30.75C392.9 325 416 291.8 416 255.9V176c0-8.8 7.2-16 16-16s16 7.2 16 16z" />
  </svg>
);

const SvgTilde = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgTilde;
