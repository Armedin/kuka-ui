import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" {...props}>
    <path d="M0 185.8c0-6.4 1.606-12.7 4.67-18.4L82.36 25.02A47.955 47.955 0 0 1 124.5 0h391c17.6 0 33.7 9.595 42.1 25.02l77.7 142.38c3.1 5.7 4.7 12 4.7 18.4 0 21.1-17.1 38.2-38.2 38.2H576v272c0 8.8-7.2 16-16 16s-16-7.2-16-16V224H96v128h256v-80c0-8.8 7.2-16 16-16s16 7.2 16 16v192c0 26.5-21.5 48-48 48H112c-26.51 0-48-21.5-48-48V224H38.25C17.12 224 0 206.9 0 185.8zm601.8 6.2c3.4 0 6.2-2.8 6.2-6.2 0-1.1-.3-2.1-.8-3L529.6 40.34c-2.9-5.14-8.2-8.34-14.1-8.34h-391c-5.9 0-11.2 3.2-14.1 8.34L32.76 182.8c-.5.9-.76 1.9-.76 3 0 3.4 2.8 6.2 6.25 6.2H601.8zM112 480h224c8.8 0 16-7.2 16-16v-80H96v80c0 8.8 7.2 16 16 16z" />
  </svg>
);

const SvgShop = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgShop;
