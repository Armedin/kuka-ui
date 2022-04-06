import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M288 400c-13.25 0-24 10.75-24 24s10.8 24 24 24 24-10.75 24-24-10.7-24-24-24zM470.6 0H48C21.49 0 0 21.49 0 48v160c0 26.5 21.49 48 48 48h102.3l7.5 86.5C121.8 356.4 96 391.1 96 432v48c0 17.6 14.4 32 32 32h320c17.6 0 32-14.4 32-32v-48c0-39.38-23.75-73.13-57.75-88l79.29-303.9C506.8 19.8 491.5 0 470.6 0zM48 224c-8.75 0-16-7.1-16-16V48c0-8.87 7.25-16 16-16h82.75l16.75 192H48zm400 208v48H128v-48c0-35.25 28.75-64 64-64h192c35.3 0 64 28.8 64 64zm5.9-336H304c-8.8 0-16 7.2-16 15.1s7.2 16.9 16 16.9h141.5l-16.62 64H304c-8.8 0-16 7.2-16 15.1s7.2 16.9 16 16.9h116.5l-29.25 112H189.4L162.9 32h307.8l-16.8 64z" />
  </svg>
);

const SvgBlender = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgBlender;
