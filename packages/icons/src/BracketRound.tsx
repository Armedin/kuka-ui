import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 192 512" {...props}>
    <path d="M121.4 451.1c7.126 5.188 8.72 15.19 3.532 22.31-3.157 4.313-8.032 6.625-12.97 6.625-3.25 0-6.501-1-9.345-3.031-4.188-3.031-102.6-75.81-102.6-220.1s98.45-217.9 102.6-220.1c7.126-5.125 17.1-3.625 22.31 3.594 5.188 7.125 3.594 17.13-3.532 22.31-3.657 2.688-89.42 66.78-89.42 195.1S117.8 448.4 121.4 451.1z" />
  </svg>
);

const SvgBracketRound = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgBracketRound;
