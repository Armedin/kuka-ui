import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" {...props}>
    <path d="M480 0c-88.38 0-160 71.62-160 160s71.63 160 160 160 160-71.62 160-160S568.4 0 480 0zm0 288c-70.75 0-128-57.25-128-128 0-29.62 10.38-56.38 27.25-78.12l179 178.9C536.4 277.6 509.6 288 480 288zm100.8-49.9L401.9 59.25C423.6 42.38 450.4 32 480 32c70.75 0 128 57.25 128 128 0 29.6-10.4 56.4-27.2 78.1zm-421.7-47C71.61 191.1 0 263.6 0 351.1S71.61 512 159.1 512 320 440.4 320 351.1s-71.6-160-160.9-160zM160 480c-65.25 0-118.4-48.88-126.4-112h252.8c-8 63.1-61.2 112-126.4 112zM33.62 336c8-63.1 61.13-112 126.38-112s118.4 48.88 126.4 112H33.62z" />
  </svg>
);

const SvgTablets = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgTablets;
