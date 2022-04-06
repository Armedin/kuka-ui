import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
    <path d="M448 48v336c-63.09 22.54-82.34 32-119.5 32-62.82 0-86.6-32-149.3-32-26.17 0-45.32 5.429-63.23 11.81C106.2 399.3 96 392.1 96 381.7a14.99 14.99 0 0 1 9.753-14.04C126.8 359.8 147.1 352 179.2 352c62.73 0 86.51 32 149.3 32 29.9 0 48.6-6.3 87.5-20.4v-272c-38.9 14.1-57.6 20.4-87.5 20.4-62.82 0-86.6-32-149.3-32-62.9 0-84.37 32-147.2 32v352c0 8.8-7.16 16-16 16s-16-7.2-16-16V48c0-8.84 7.164-16 16-16s16 7.16 16 16v32c62.83 0 84.33-32 147.2-32 62.73 0 86.51 32 149.3 32 37.2 0 56.4-9.46 119.5-32z" />
  </svg>
);

const SvgFontAwesome = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgFontAwesome;
