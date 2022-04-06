import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" {...props}>
    <path d="M112 32C50.25 32 0 82.25 0 143.1v223.1c0 61.75 50.25 111.1 112 111.1s112-50.25 112-111.1V143.1C224 82.25 173.8 32 112 32zm80 336c0 44.1-35.9 80-80 80s-80-35.9-80-80v-80h160v80zm0-112H32V144c0-44.12 35.88-80 80-80s80 35.88 80 80v112zm224-96c-88.38 0-160 71.62-160 160s71.63 160 160 160 160-71.63 160-160-71.6-160-160-160zm0 288c-70.75 0-128-57.25-128-128 0-29.62 10.38-56.38 27.25-78.12l178.1 178.9C472.4 437.6 445.6 448 416 448zm100.8-49.9L337.9 219.2c21.7-16.7 48.5-27.2 78.1-27.2 70.75 0 128 57.25 128 128 0 29.6-10.4 56.4-27.2 78.1z" />
  </svg>
);

const SvgPills = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgPills;
