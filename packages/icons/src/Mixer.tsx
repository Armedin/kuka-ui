import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M114.57 76.07a45.71 45.71 0 0 0-67.51-6.41c-17.58 16.18-19 43.52-4.75 62.77l91.78 123-92.33 124.15c-14.23 19.25-13.11 46.59 4.74 62.77a45.71 45.71 0 0 0 67.5-6.41L242.89 262.7a12.14 12.14 0 0 0 0-14.23Zm355.67 303.51-92.33-124.13 91.78-123c14.22-19.25 12.83-46.59-4.75-62.77a45.71 45.71 0 0 0-67.51 6.41l-128 172.12a12.14 12.14 0 0 0 0 14.23L398 435.94a45.71 45.71 0 0 0 67.51 6.41c17.84-16.18 18.96-43.52 4.73-62.77Z" />
  </svg>
);

const SvgMixer = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgMixer;
