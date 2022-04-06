import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" {...props}>
    <path d="M368 32c8.8 0 16 7.16 16 16s-7.2 16-16 16h-45.6c-19.3 0-36.7 11.54-44.2 29.3L222.9 224H336c8.8 0 16 7.2 16 16s-7.2 16-16 16H209.4l-74.1 175.2C122.7 460.8 93.72 480 61.58 480H16c-8.836 0-16-7.2-16-16s7.164-16 16-16h45.58c19.29 0 36.7-11.5 44.22-29.3L174.6 256H48c-8.84 0-16-7.2-16-16s7.16-16 16-16h140.2l60.5-143.17C261.3 51.23 290.3 32 322.4 32H368z" />
  </svg>
);

const SvgFlorinSign = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgFlorinSign;
