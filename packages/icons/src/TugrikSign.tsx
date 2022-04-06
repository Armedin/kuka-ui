import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" {...props}>
    <path d="M368 32c8.8 0 16 7.16 16 16s-7.2 16-16 16H208v139.5l108.1-27c8.6-2.2 17.3 3 19.4 11.6 2.2 8.6-3 17.3-11.6 19.4l-115.9 29v63l108.1-27c8.6-2.2 17.3 3 19.4 11.6 2.2 8.6-3 17.3-11.6 19.4l-115.9 29V456c0 8.8-7.2 16-16 16s-16-7.2-16-16V340.5l-108.12 27c-8.57 2.2-17.26-3-19.4-11.6-2.15-8.6 3.07-17.3 11.64-19.4l115.88-29v-63l-108.12 27c-8.57 2.2-17.26-3-19.4-11.6-2.15-8.6 3.07-17.3 11.64-19.4l115.88-29V64H16C7.164 64 0 56.84 0 48s7.164-16 16-16h352z" />
  </svg>
);

const SvgTugrikSign = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgTugrikSign;
