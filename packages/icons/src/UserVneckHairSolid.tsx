import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
    <path d="M96 128C96 57.31 153.3 0 224 0s128 57.31 128 128v16c0 70.7-57.3 128-128 128S96 214.7 96 144v-16zm201.3-32H296c-20.5 0-38.7-9.6-50.4-24.54C231.9 95.67 205.8 112 176 112h-30.4c-1 5.2-1.6 10.5-1.6 16v16c0 44.2 35.8 80 80 80s80-35.8 80-80v-16c0-11.4-2.4-22.2-6.7-32zm-.1 224.3c84.2 5.4 150.8 75.4 150.8 161 0 16.9-13.8 30.7-30.7 30.7H30.72C13.75 512 0 498.2 0 481.3c0-85.6 66.62-155.6 150.8-161L224 424l73.2-103.7z" />
  </svg>
);

const SvgUserVneckHairSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgUserVneckHairSolid;
