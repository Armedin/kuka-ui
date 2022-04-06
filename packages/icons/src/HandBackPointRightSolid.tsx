import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M224 464h-80C67.91 464 6.1 404.51 1 329.7c-.662-3.1-1-6.4-1-9.7V208c0-45.09 21.53-88.16 57.61-115.2L83.2 73.61C91.52 67.38 101.6 64 112 64h48c14.58 0 28.38 6.625 37.48 18l23.99 29.99H176c-8.836 0-16 7.162-16 16 0 8.836 7.161 16.01 15.1 16.01H472c22.1 0 40 17.9 40 40s-17.9 40-40 40H307.5c7.7 8.5 12.5 19.7 12.5 32 0 23.48-16.88 42.96-39.17 47.11C294.7 311.5 304 326.6 304 344c0 23.47-16.87 42.94-39.14 47.11C269.3 398.4 272 406.9 272 416c0 26.5-21.5 48-48 48z" />
  </svg>
);

const SvgHandBackPointRightSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgHandBackPointRightSolid;
