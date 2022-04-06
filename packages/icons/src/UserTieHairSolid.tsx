import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
    <path d="M352 128v16c0 70.7-57.3 128-128 128S96 214.7 96 144v-16C96 57.31 153.3 0 224 0s128 57.31 128 128zm-48 16v-16c0-11.4-2.4-22.2-6.7-32H296c-20.5 0-38.7-9.6-50.4-24.54C231.9 95.67 205.8 112 176 112h-30.4c-1 5.2-1.6 10.5-1.6 16v16c0 44.2 35.8 80 80 80s80-35.8 80-80zM30.72 512C13.75 512 0 498.2 0 481.3c0-80.6 59.09-147.4 136.3-159.4l39.5 161.2 33.3-123.9L176 304h96l-33.1 55.2 33.3 123.9 39.5-161.2c77.2 12 136.3 78.8 136.3 159.4 0 16.9-13.8 30.7-30.7 30.7H30.72z" />
  </svg>
);

const SvgUserTieHairSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgUserTieHairSolid;
